package com.translater.Service;

import com.deepl.api.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class DeepLService {

    @Value("subscribe.number")
    private String authKey;
    private String context;
    private final Translator translator;
    private final TextTranslationOptions textTranslationOptions;


    public DeepLService(){

        Map<String, String> headers = new HashMap<>();
        headers.put("Host", "api-free.deepl.com");
        TranslatorOptions options =
                new TranslatorOptions().setHeaders(headers);


        this.translator = new Translator(this.authKey, options);
        this.textTranslationOptions =
                new TextTranslationOptions()
                        .setSentenceSplittingMode(SentenceSplittingMode.All)
                        .setFormality(Formality.Less);
    }

    public String textTranslation(String text, String sourceLanguage, String targetLanguage) throws DeepLException, InterruptedException {
        return translator.translateText(
                text,
                sourceLanguage,
                targetLanguage,
                textTranslationOptions).getText();
    }

    public void getUsageExample() throws Exception {
        Usage usage = translator.getUsage();
        if (usage.anyLimitReached()) {
            System.out.println("Translation limit reached.");
        }
        if (usage.getCharacter() != null) {
            System.out.printf("Character usage: %d of %d%n",
                    usage.getCharacter().getCount(),
                    usage.getCharacter().getLimit());
        }
        if (usage.getDocument() != null) {
            System.out.printf("Document usage: %d of %d%n",
                    usage.getDocument().getCount(),
                    usage.getDocument().getLimit());
        }
    }

    public void getLanguagesExample() throws Exception {
        List<Language> sourceLanguages = translator.getSourceLanguages();
        List<Language> targetLanguages = translator.getTargetLanguages();
        System.out.println("Source languages:");
        for (Language language : sourceLanguages) {
            System.out.printf("%s (%s)%n",
                    language.getName(),
                    language.getCode()); // Example: "German (de)"
        }

        System.out.println("Target languages:");
        for (Language language : targetLanguages) {
            if (Boolean.TRUE.equals(language.getSupportsFormality())) {
                System.out.printf("%s (%s) supports formality%n",
                        language.getName(),
                        language.getCode()); // Example: "Italian (it) supports formality"

            } else {
                System.out.printf("%s (%s)%n",
                        language.getName(),
                        language.getCode()); // Example: "Lithuanian (lt)"
            }
        }
    }
}
