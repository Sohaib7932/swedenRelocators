import json
import os

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

def main():
    # Base directory
    base_dir = 'src/locales/translations'
    
    # Load reference translations (Urdu as source, English as fallback)
    print("Loading reference translations...")
    urdu_file = os.path.join(base_dir, 'ur', 'translation.json')
    english_file = os.path.join(base_dir, 'en', 'translation.json')
    
    urdu_data = load_json_safely(urdu_file)
    english_data = load_json_safely(english_file)
    
    print(f"Urdu has {len(urdu_data)} keys")
    print(f"English has {len(english_data)} keys")
    
    # Languages to populate
    languages = ['pr', 'gr', 'pn']  # Persian, Greek, Punjabi
    
    for lang_code in languages:
        print(f"\n{'='*50}")
        print(f"Populating {lang_code.upper()}")
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
        
        # Populate missing keys with English translations as placeholders
        added_count = 0
        for key in missing_keys:
            if key in english_data:
                # Use English translation as placeholder
                existing_data[key] = f"[{lang_code.upper()}] {english_data[key]}"
                added_count += 1
            elif key in urdu_data:
                # Use Urdu translation as fallback with marker
                existing_data[key] = f"[{lang_code.upper()}] {urdu_data[key]}"
                added_count += 1
        
        # Save updated translations
        print(f"Saving {lang_code} translations with {len(existing_data)} total keys...")
        save_json(existing_data, lang_file)
        print(f"✅ Added {added_count} placeholder translations for {lang_code}")
        
        # Create/update the index.js file
        index_file = os.path.join(base_dir, lang_code, 'index.js')
        with open(index_file, 'w', encoding='utf-8') as f:
            f.write("import translationData from './translation.json' with { type: 'json' };\n\n")
            f.write("export default translationData;\n")
        print(f"Updated index.js for {lang_code}")

if __name__ == "__main__":
    print("🚀 Quick Translation Populator")
    print("This will populate missing translations with English placeholders marked with language codes")
    print("You can later translate these marked entries manually or with automated tools")
    main()
    print("\n✅ All placeholder translations created!") 