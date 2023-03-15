package com.codestates.server_001_withskey.domain.drink.tastingNote;

import lombok.Getter;

import java.util.HashMap;
import java.util.Map;

@Getter
public class Tasting {
//    Map<String, Integer> jackDanielHoney = new HashMap<>();


    // Citrus / Tropical Fruit : 산뜻한 맛의 정도

    // Citrus, Berry, Tropical, Herbal & Floral, Spice, Sweet, Smoky & Woody

    // Citrus: lemon, lime, orange, grapefruit, tangerine, yuzu
    //Berry: raspberry, strawberry, blueberry, blackberry, cranberry, acai
    //Tropical: pineapple, mango, passion fruit, coconut, papaya, guava, kiwi
    //Stone fruit: peach, apricot, cherry, plum, nectarine
    //Apple and pear: green apple, red apple, pear
    //Melon: watermelon, cantaloupe, honeydew
    //Herbal and floral: mint, basil, lavender, elderflower, rose, hibiscus
    //Spice: cinnamon, ginger, cardamom, nutmeg, clove, vanilla
    //Nutty: almond, hazelnut, pistachio, walnut, pecan, cashew
    //Earthy and savory: cucumber, celery, carrot, beet, tomato
    //Coffee and chocolate: espresso, mocha, white chocolate, dark chocolate, cocoa
    //Tea: green tea, black tea, chai, matcha, chamomile, jasmine
    //Creamy and dairy: milk, cream, condensed milk, horchata, eggnog
    //Sweet: caramel, butterscotch, maple, honey, agave
    //Smoky and woody: oak, mesquite, hickory, whiskey, mezcal

    public void jackDanielHoney () {
        Map<String, Integer> jackDanielHoney = new HashMap<>();
        jackDanielHoney.put("SWEET", 3);
        jackDanielHoney.put("SPICE", 2);
        jackDanielHoney.put("BITTER", 3);
        jackDanielHoney.put("CITRUS", 2);
        jackDanielHoney.put("SMOKY", 3);
    }
    public void fireBall () {
        Map<String, Integer> fireBall = new HashMap<>();
        fireBall.put("SWEET", 4);
        fireBall.put("SPICE", 3);
        fireBall.put("BITTER", 2);
        fireBall.put("CITRUS", 2);
        fireBall.put("SMOKY", 2);
    }
}
