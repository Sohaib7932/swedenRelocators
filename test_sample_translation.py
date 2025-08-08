import json
import os
from deep_translator import GoogleTranslator

def test_translation():
    # Test translations for key phrases
    test_phrases = [
        "About Us",
        "Contact Us", 
        "Services",
        "Get Started",
        "Why Choose"
    ]
    
    languages = {
        'pr': 'fa',  # Persian
        'gr': 'el',  # Greek 
        'pn': 'pa'   # Punjabi
    }
    
    print("🧪 Testing Translation System")
    print("="*50)
    
    for lang_code, google_lang in languages.items():
        print(f"\nTesting {lang_code.upper()} ({google_lang}):")
        print("-" * 30)
        
        for phrase in test_phrases:
            try:
                translator = GoogleTranslator(source='en', target=google_lang)
                result = translator.translate(phrase)
                print(f"  {phrase} → {result}")
            except Exception as e:
                print(f"  {phrase} → ERROR: {e}")
        
        print()

def update_sample_keys():
    """Update a few sample keys in each language"""
    base_dir = 'src/locales/translations'
    
    # Common UI keys to translate
    sample_keys = [
        "About Us",
        "Contact Us", 
        "Services",
        "Get Started",
        "Why Choose"
    ]
    
    languages = {
        'pr': 'fa',  # Persian
        'gr': 'el',  # Greek 
        'pn': 'pa'   # Punjabi
    }
    
    print("\n📝 Updating Sample Keys")
    print("="*50)
    
    for lang_code, google_lang in languages.items():
        print(f"\nUpdating {lang_code.upper()}...")
        
        lang_file = os.path.join(base_dir, lang_code, 'translation.json')
        
        if not os.path.exists(lang_file):
            print(f"  File {lang_file} doesn't exist")
            continue
        
        # Load existing data
        with open(lang_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        updated_count = 0
        for key in sample_keys:
            if key in data:
                original_value = data[key]
                # Check if it has the placeholder prefix
                if str(original_value).startswith(f"[{lang_code.upper()}]"):
                    # Extract the text without the prefix
                    clean_text = original_value.replace(f"[{lang_code.upper()}] ", "")
                    
                    try:
                        translator = GoogleTranslator(source='en', target=google_lang)
                        translated = translator.translate(clean_text)
                        data[key] = translated
                        print(f"  {key}: {clean_text} → {translated}")
                        updated_count += 1
                    except Exception as e:
                        print(f"  {key}: ERROR - {e}")
        
        if updated_count > 0:
            # Save the updated file
            with open(lang_file, 'w', encoding='utf-8') as f:
                json.dump(data, f, ensure_ascii=False, indent=2)
            print(f"  ✅ Updated {updated_count} keys in {lang_code}")
        else:
            print(f"  ℹ️  No keys updated in {lang_code}")

if __name__ == "__main__":
    test_translation()
    update_sample_keys()
    print("\n✅ Sample translation test completed!") 