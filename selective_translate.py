import json
import os
import time
import re
from deep_translator import GoogleTranslator

def load_json_safely(filepath):
    """Load JSON file, handling potential duplicate keys"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
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
        
        # Remove the language marker prefix [XX] 
        cleaned_text = re.sub(r'^\[[A-Z]{2}\]\s*', '', text)
        
        # Handle special cases where translation might not be needed
        if cleaned_text.isdigit() or cleaned_text in ['CVR 41200677', 'REG 559025-2648', '+46 723 276 276']:
            return cleaned_text
            
        # Handle URLs and technical terms
        if cleaned_text.startswith('http') or cleaned_text.startswith('www'):
            return cleaned_text
            
        # Translate the text
        translator = GoogleTranslator(source='auto', target=target_lang)
        result = translator.translate(cleaned_text)
        return result if result else cleaned_text
        
    except Exception as e:
        print(f"Error translating '{text[:30]}...' to {target_lang}: {e}")
        # Return text without the marker prefix as fallback
        return re.sub(r'^\[[A-Z]{2}\]\s*', '', text)

def main():
    # Language mappings: {local_code: google_translate_code}
    languages = {
        'pr': 'fa',  # Persian -> Farsi
        'gr': 'el',  # Greek -> Greek
        'pn': 'pa'   # Punjabi -> Punjabi
    }
    
    # Base directory
    base_dir = 'src/locales/translations'
    
    print("🔄 Selective Translation Tool")
    print("This will translate placeholder entries marked with [LANG] prefixes")
    
    # Process each target language
    for lang_code, google_lang in languages.items():
        print(f"\n{'='*60}")
        print(f"Processing {lang_code.upper()} (Google Translate: {google_lang})")
        print(f"{'='*60}")
        
        lang_file = os.path.join(base_dir, lang_code, 'translation.json')
        
        # Load translations
        if not os.path.exists(lang_file):
            print(f"File {lang_file} doesn't exist, skipping...")
            continue
            
        existing_data = load_json_safely(lang_file)
        print(f"Loaded {len(existing_data)} total keys for {lang_code}")
        
        # Find entries that need translation (those with [LANG] prefix)
        marker = f"[{lang_code.upper()}]"
        marked_keys = [k for k, v in existing_data.items() if str(v).startswith(marker)]
        
        print(f"Found {len(marked_keys)} entries marked for translation")
        
        if not marked_keys:
            print(f"No marked entries to translate for {lang_code}")
            continue
        
        # Show sample of what will be translated
        print(f"\nSample entries to translate:")
        for i, key in enumerate(marked_keys[:3]):
            original = existing_data[key]
            cleaned = re.sub(r'^\[[A-Z]{2}\]\s*', '', original)
            print(f"  {i+1}. '{key}': '{cleaned[:50]}{'...' if len(cleaned) > 50 else ''}'")
        
        if len(marked_keys) > 3:
            print(f"  ... and {len(marked_keys) - 3} more")
        
        # Ask user if they want to proceed
        response = input(f"\nTranslate {len(marked_keys)} marked entries for {lang_code}? (y/n/sample): ").lower()
        
        if response == 'sample':
            # Translate only a small sample (first 10 keys)
            keys_to_translate = marked_keys[:10]
            print(f"Translating sample of {len(keys_to_translate)} entries...")
        elif response == 'y':
            keys_to_translate = marked_keys
            print(f"Translating all {len(keys_to_translate)} entries...")
        else:
            print(f"Skipping {lang_code}")
            continue
        
        # Translate the selected keys
        translated_count = 0
        
        for i, key in enumerate(keys_to_translate):
            original_text = existing_data[key]
            
            print(f"[{i+1}/{len(keys_to_translate)}] Translating: {key[:30]}...")
            
            translated_text = translate_text(original_text, google_lang)
            existing_data[key] = translated_text
            translated_count += 1
            
            # Rate limiting
           
            
            # Progress update every 10 translations
            if (i + 1) % 10 == 0:
                print(f"Progress: {i + 1}/{len(keys_to_translate)} completed...")
                time.sleep(2)  # Longer pause every 10 translations
        
        # Save updated translations
        print(f"\nSaving {lang_code} translations...")
        save_json(existing_data, lang_file)
        print(f"✅ Completed {lang_code}: translated {translated_count} entries")
        
        # Show sample of translated content
        print(f"\nSample translated entries:")
        for i, key in enumerate(keys_to_translate[:3]):
            print(f"  {i+1}. '{key}': '{existing_data[key][:50]}{'...' if len(existing_data[key]) > 50 else ''}'")

if __name__ == "__main__":
    main()
    print("\n✅ Selective translation completed!") 