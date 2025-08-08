#!/usr/bin/env python3
"""
Translate a JSON dictionary of *English keys* into multiple languages,
with detailed progress logging.

Dependencies
------------
pip install deep-translator nltk tqdm

First run only (for sentence-tokenizer):
python -m nltk.downloader punkt
"""

import json
import logging
import math
import time
from pathlib import Path
from typing import Dict, List

from deep_translator import GoogleTranslator, exceptions

from tqdm import tqdm

# ────────────────────────────────── CONFIG ────────────────────────────────── #
SOURCE_FILE = Path("translations_en_ur.json")          # English keys only

TARGET_LANGS: Dict[str, str] = {
   
   
   
    "el": "Greek",
    "pa": "Punjabi (Gurmukhi)",
}

CONSOLIDATED_FILE = Path("translations_multilang.json")
MAX_GOOGLE_LEN = 4_500        # safety margin (< 5 000 char hard-limit)
PROGRESS_EVERY = 15           # log every N translated keys
# ───────────────────────────────────────────────────────────────────────────── #

# logging format
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s  [%(levelname)s] %(message)s",
    datefmt="%H:%M:%S"
)




def load_keys(path: Path) -> List[str]:
    with path.open(encoding="utf-8") as f:
        data = json.load(f)
    keys = list(data.keys())
    logging.info("Loaded %d English keys from %s", len(keys), path)
    return keys


def chunk_long(text: str) -> list[str]:
    """Rough splitter that avoids Google’s 5 000-char limit without NLTK."""
    if len(text) <= MAX_GOOGLE_LEN:
        return [text]

    chunks, cur = [], ""
    for sentence in text.split(". "):
        # add the period back (except for the last chunk)
        sentence = sentence + ". "
        if len(cur) + len(sentence) > MAX_GOOGLE_LEN:
            chunks.append(cur.strip())
            cur = sentence
        else:
            cur += sentence
    if cur:
        chunks.append(cur.strip())
    return chunks



def safe_translate(trans: GoogleTranslator, text: str) -> str:
    """
    Translate *text*; handle Google quirks and log issues.
    Keeps English if translation fails.
    """
    suffix = ":" if text.endswith(":") else ""
    body = text[:-1] if suffix else text

    try:
        parts = [trans.translate(c) for c in chunk_long(body)]
        joined = " ".join(parts).strip()
        if not joined:
            raise exceptions.TranslationNotFound(text)
        return joined + suffix

    except (exceptions.TranslationNotFound,
            exceptions.NotValidPayload,
            exceptions.RequestError) as e:
        logging.warning("Skipped (kept English) – %s — %s",
                        text[:60] + ("…" if len(text) > 60 else ""), e.__class__.__name__)
        return text


def translate_language(keys: List[str], dest: str, lang_name: str) -> Dict[str, str]:
    trans = GoogleTranslator(source="en", target=dest, timeout=5)
    total = len(keys)
    result: Dict[str, str] = {}

    logging.info("→ [%s] translating %d keys …", lang_name, total)
    for idx, key in enumerate(keys, 1):
        result[key] = safe_translate(trans, key)

        # show incremental progress in log
        if idx % PROGRESS_EVERY == 0 or idx == total:
            pct = math.ceil(idx / total * 100)
            logging.info("   %s: %3d%% (%d/%d)", lang_name, pct, idx, total)
    return result


def main() -> None:
    start_time = time.time()
    english_keys = load_keys(SOURCE_FILE)
    consolidated: Dict[str, Dict[str, str]] = {}

    # prettier progress bar across languages
    for code, name in tqdm(TARGET_LANGS.items(), desc="Languages", ncols=80):
        translations = translate_language(english_keys, code, name)

        out_file = Path(f"translations_{code}.json")
        out_file.write_text(json.dumps(translations, ensure_ascii=False, indent=2),
                            encoding="utf-8")
        logging.info("✔ Saved %s", out_file)
        consolidated[code] = translations

    CONSOLIDATED_FILE.write_text(
        json.dumps(consolidated, ensure_ascii=False, indent=2), encoding="utf-8")
    elapsed = time.time() - start_time
    logging.info("🏁 All languages done in %.1f s – consolidated file: %s",
                 elapsed, CONSOLIDATED_FILE.resolve())


if __name__ == "__main__":
    main()
