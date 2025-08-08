import json
import os
import time
from deep_translator import GoogleTranslator

def load_json_safely(filepath):
    """Load JSON file, handling potential duplicate keys"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Use json.loads which will keep the last occurrence of duplicate keys
        data = json.loads(content)
        return data
    except Exception as e:
        print(f"Error loading {filepath}: {e}")
        return {}

def save_json(data, filepath):
    """Save data to JSON file with proper formatting"""
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

def translate_text(text, target_lang):
    """Translate text to target language using deep-translator"""
    try:
        if not text or text.strip() == "":
            return text
        
        # Handle special cases where translation might not be needed
        if text.isdigit() or text in ['CVR 41200677', 'REG 559025-2648', '+46 723 276 276']:
            return text
            
        # Handle URLs and technical terms
        if text.startswith('http') or text.startswith('www'):
            return text
            
        # Translate the text
        translator = GoogleTranslator(source='ur', target=target_lang)
        result = translator.translate(text)
        return result if result else text
        
    except Exception as e:
        print(f"Error translating '{text[:30]}...' to {target_lang}: {e}")
        return text

def translate_batch(texts, target_lang, batch_size=5):
    """Translate a batch of texts with rate limiting"""
    results = []
    
    for i in range(0, len(texts), batch_size):
        batch = texts[i:i+batch_size]
        batch_results = []
        
        for text in batch:
            translated = translate_text(text, target_lang)
            batch_results.append(translated)
            time.sleep(0.5)  # Rate limiting
        
        results.extend(batch_results)
        
        if i + batch_size < len(texts):
            print(f"Translated {i + batch_size}/{len(texts)} texts...")
            time.sleep(2)  # Longer pause between batches
    
    return results

def main():
    # Language mappings: {local_code: google_translate_code}
    languages = {
        'pr': 'fa',  # Persian -> Farsi
        'gr': 'el',  # Greek -> Greek
        'pn': 'pa'   # Punjabi -> Punjabi
    }
    
    # Base directory
    base_dir = 'src/locales/translations'
    
    # Load Urdu translations as reference
    print("Loading Urdu translations...")
    urdu_file = os.path.join(base_dir, 'ur', 'translation.json')
    urdu_data = load_json_safely(urdu_file)
    
    print(f"Urdu has {len(urdu_data)} keys")
    
    # Process each target language
    for lang_code, google_lang in languages.items():
        print(f"\n{'='*50}")
        print(f"Processing {lang_code.upper()} (target: {google_lang})")
        print(f"{'='*50}")
        
        lang_file = os.path.join(base_dir, lang_code, 'translation.json')
        
        # Load existing translations
        if os.path.exists(lang_file):
            existing_data = load_json_safely(lang_file)
            print(f"{lang_code} has {len(existing_data)} existing keys")
        else:
            existing_data = {}
            print(f"{lang_code} file doesn't exist, creating new one")
        
        # Find missing keys
        missing_keys = [k for k in urdu_data.keys() if k not in existing_data]
        print(f"Missing {len(missing_keys)} keys in {lang_code}")
        
        if not missing_keys:
            print(f"No missing keys for {lang_code}")
            continue
        
        # Ask user if they want to proceed
        response = input(f"Translate {len(missing_keys)} missing keys for {lang_code}? (y/n): ")
        if response.lower() != 'y':
            print(f"Skipping {lang_code}")
            continue
        
        # Translate missing keys
        print(f"Starting translation for {lang_code}...")
        missing_texts = [urdu_data[key] for key in missing_keys]
        
        # Translate in batches
        translated_texts = translate_batch(missing_texts, google_lang, batch_size=3)
        
        # Add translations to existing data
        for key, translated_text in zip(missing_keys, translated_texts):
            existing_data[key] = translated_text
        
        # Save updated translations
        print(f"Saving {lang_code} translations with {len(existing_data)} total keys...")
        save_json(existing_data, lang_file)
        print(f"✅ Completed {lang_code}: added {len(missing_keys)} new translations")
        
        # Update the index.js file to reload the translations
        index_file = os.path.join(base_dir, lang_code, 'index.js')
        if os.path.exists(index_file):
            print(f"Index file for {lang_code} already exists")
        else:
            with open(index_file, 'w', encoding='utf-8') as f:
                f.write("import translationData from './translation.json' with { type: 'json' };\n\n")
                f.write("export default translationData;\n")
            print(f"Created index.js for {lang_code}")

if __name__ == "__main__":
    print("🌍 Translation Tool for Missing Keys")
    print("This will translate missing keys from Urdu to Persian, Greek, and Punjabi")
    main()
    print("\n✅ All translations completed!") 