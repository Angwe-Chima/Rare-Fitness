const products = [
  {
    "id": 1,
    "name": "Cotton Comfort Workout T-Shirt",
    "description":
      "Experience ultimate comfort with our Cotton Comfort Workout T-Shirt, made from 100% premium cotton. Designed to keep you cool and dry, this t-shirt features advanced moisture-wicking technology and a breathable fabric. Whether you're hitting the gym or going for a run, this t-shirt ensures you stay fresh and comfortable. Its stylish fit and modern design make it a perfect choice for both workouts and casual outings. Available in various colors to match your personal style.",
    "priceCents": 1599,
    "category": "Wears",
    "brand": "ActiveFit",
    "stock": 100,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Fworkout_tshirt.jpg?alt=media&token=a4a4376c-c20c-4db7-98b7-9548d157a59d",
    "rating": {
      "stars": 4.5,
      "numberOfRatings": 50
    }
  },
  {
    "id": 2,
    "name": "Breathable Performance Tank Top",
    "description":
      "Elevate your workout experience with our Breathable Performance Tank Top, engineered for high-performance activities. This tank top features a lightweight and stretchy fabric that offers complete freedom of movement. Its mesh panels enhance ventilation, keeping you cool even during the most intense workouts. Perfect for gym sessions, yoga, or outdoor sports, this tank top is a must-have for any fitness enthusiast. Pair it with your favorite leggings or shorts for a stylish and functional workout outfit.",
    "priceCents": 1299,
    "category": "Wears",
    "brand": "SportPro",
    "stock": 80,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Ftank_top.jpg?alt=media&token=ee3418d3-e125-4242-9ba1-7fa0b0d06a6e",
    "rating": {
      "stars": 3,
      "numberOfRatings": 30
    }
  },
  {
    "id": 3,
    "name": "Warm & Cozy Workout Hoodie",
    "description":
      "Stay warm and stylish with our Warm & Cozy Workout Hoodie, designed for those chilly workout days. Crafted with a soft fleece lining, this hoodie provides superior warmth and comfort. The adjustable drawstring hood and kangaroo pocket add functionality and style. Whether you're heading to the gym or going for a casual stroll, this hoodie offers the perfect blend of fashion and functionality. Available in a range of colors to suit your wardrobe.",
    "priceCents": 2999,
    "category": "Wears",
    "brand": "CozyGym",
    "stock": 60,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Fcozy_hoodie.jpg?alt=media&token=de09b9aa-7715-4af8-aa00-6778aff72ef4",
    "rating": {
      "stars": 5,
      "numberOfRatings": 40
    }
  },
  {
    "id": 4,
    "name": "Stylish Athletic Joggers",
    "description":
      "Our Stylish Athletic Joggers combine fashion and functionality, making them a staple in your workout wardrobe. These joggers are made with a soft and stretchy fabric that moves with you, ensuring maximum comfort during any activity. The tapered fit and elastic waistband provide a secure and flattering fit, while the side pockets offer convenient storage for your essentials. Perfect for gym sessions, running errands, or lounging at home, these joggers are versatile and stylish.",
    "priceCents": 2599,
    "category": "Wears",
    "brand": "Athleisure",
    "stock": 70,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Fathletic_jogger.jpg?alt=media&token=6fb7e19b-aba5-4fcd-880f-2d26036182bb",
    "rating": {
      "stars": 3.5,
      "numberOfRatings": 35
    }
  },
  {
    "id": 5,
    "name": "Lightweight Running Shorts",
    "description":
      "Hit the track with confidence in our Lightweight Running Shorts, designed for maximum performance and comfort. These shorts feature a lightweight and breathable fabric that wicks away sweat, keeping you dry and comfortable. The built-in mesh liner offers added support and comfort, while the elastic waistband ensures a secure fit. With reflective elements for enhanced visibility and multiple pockets for storage, these shorts are perfect for running, gym workouts, and outdoor adventures.",
    "priceCents": 1899,
    "category": "Wears",
    "brand": "RunFlex",
    "stock": 90,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Frunning_shorts.jpg?alt=media&token=55e0fb62-c927-4c0a-ac02-a6d47cb7fff3",
    "rating": {
      "stars": 4.4,
      "numberOfRatings": 45
    }
  },
  {
    "id": 6,
    "name": "Flexible Yoga Leggings",
    "description":
      "Embrace your yoga practice with our Flexible Yoga Leggings, offering unparalleled comfort and support. These leggings feature a high-waist design for a secure and flattering fit, with a four-way stretch fabric that moves with you. The moisture-wicking technology keeps you dry and comfortable during your workouts, while the flatlock seams reduce irritation and chafing. Perfect for yoga, pilates, or casual wear, these leggings are available in a variety of colors and patterns to suit your style.",
    "priceCents": 2299,
    "category": "Wears",
    "brand": "YogaEase",
    "stock": 75,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Fleggings.jpg?alt=media&token=17c0810e-4c70-4fb1-b0de-483d73335ca6",
    "rating": {
      "stars": 4.7,
      "numberOfRatings": 50
    }
  },
  {
    "id": 7,
    "name": "Supportive High-Impact Sports Bra",
    "description":
      "Achieve your best performance with our Supportive High-Impact Sports Bra, designed for intense workouts and running. This sports bra offers superior support and comfort with its compression fit and adjustable straps. The breathable fabric and mesh panels enhance ventilation, keeping you cool and comfortable. With a stylish racerback design and a variety of colors, this sports bra is a must-have for any active woman. Pair it with our matching leggings for a complete workout look.",
    "priceCents": 1999,
    "category": "Wears",
    "brand": "SupportPlus",
    "stock": 65,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Fhigh_impact_sports_bra.jpg?alt=media&token=81d86220-ec59-4af7-a8ea-61eda710173e",
    "rating": {
      "stars": 4.9,
      "numberOfRatings": 60
    }
  },
  {
    "id": 8,
    "name": "Breathable Athletic Socks",
    "description":
      "Keep your feet comfortable and dry with our Breathable Athletic Socks, designed for active lifestyles. These socks feature moisture-wicking technology and a breathable fabric that prevents odors and blisters. The cushioned sole and arch support provide added comfort, making them perfect for running, gym workouts, or everyday wear. With a variety of colors and sizes available, these socks are a great addition to your athletic gear.",
    "priceCents": 599,
    "category": "Wears",
    "brand": "ActiveFit",
    "stock": 200,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Fathletic_socks.jpg?alt=media&token=1855af22-9023-446d-b29f-459edb0722eb",
    "rating": {
      "stars": 4.3,
      "numberOfRatings": 25
    }
  },
  {
    "id": 9,
    "name": "Comfy Workout Sweatpants",
    "description":
      "Our Comfy Workout Sweatpants are designed for both performance and relaxation, making them perfect for workouts or lounging at home. Made with a soft and durable fabric, these sweatpants offer a relaxed fit with an elastic waistband and drawstring for a secure fit. The side pockets provide convenient storage for your essentials, while the ribbed cuffs keep the pants in place during activities. Available in various colors, these sweatpants are a versatile addition to your wardrobe.",
    "priceCents": 2399,
    "category": "Wears",
    "brand": "SportPro",
    "stock": 85,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Fcomfy_workout_sweatpants.jpg?alt=media&token=2bd94492-f9d6-4376-bed3-fb58b69f05f2",
    "rating": {
      "stars": 4.5,
      "numberOfRatings": 40
    }
  },
  {
    "id": 10,
    "name": "Muscle Support Compression Shirt",
    "description":
      "Enhance your performance with our Muscle Support Compression Shirt, designed for weightlifting and high-intensity training. This shirt features compression technology that provides muscle support and improves blood circulation, reducing fatigue and enhancing recovery. The moisture-wicking fabric keeps you dry and comfortable, while the ergonomic design offers a full range of motion. Perfect for athletes and fitness enthusiasts, this compression shirt is available in a variety of colors to match your style.",
    "priceCents": 2099,
    "category": "Wears",
    "brand": "CozyGym",
    "stock": 60,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Fcompression_shirt.jpg?alt=media&token=6beb1d6d-3f2b-482c-8320-54c0eeb5205c",
    "rating": {
      "stars": 4.6,
      "numberOfRatings": 35
    }
  },
  {
    "id": 11,
    "name": "Adjustable Strength Training Dumbbells",
    "description":
      "Take your strength training to the next level with our Adjustable Strength Training Dumbbells, perfect for home workouts. These dumbbells feature a durable construction with adjustable weight plates, allowing you to customize your workout intensity. The ergonomic handle provides a comfortable grip, while the compact design saves space in your home gym. Suitable for various exercises, from curls to presses, these dumbbells are a versatile addition to your fitness routine.",
    "priceCents": 4999,
    "category": "Equipment",
    "brand": "Athleisure",
    "stock": 50,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Fadjustable_dumbell.jpg?alt=media&token=a6a0534f-ee6d-4415-b88c-0f98412c9188",
    "rating": {
      "stars": 4.7,
      "numberOfRatings": 45
    }
  },
  {
    "id": 12,
    "name": "Standard Weightlifting Barbell Set",
    "description":
      "Elevate your weightlifting sessions with our Standard Weightlifting Barbell Set, designed for both beginners and advanced lifters. This set includes a durable barbell and adjustable weight plates, allowing you to customize your workout intensity. The knurled grip ensures a secure hold, while the sturdy construction ensures long-lasting performance. Perfect for squats, deadlifts, and presses, this barbell set is a must-have for any home gym.",
    "priceCents": 7999,
    "category": "Equipment",
    "brand": "RunFlex",
    "stock": 40,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Fbarbell_set.jpg?alt=media&token=ec83678a-f2ff-4c85-8582-ffc8c781d870",
    "rating": {
      "stars": 4.5,
      "numberOfRatings": 35
    }
  },
  {
    "id": 13,
    "name": "High-Performance Treadmill",
    "description":
      "Achieve your fitness goals with our High-Performance Treadmill, equipped with advanced features and a powerful motor. This treadmill offers multiple workout programs and adjustable speed and incline settings, allowing you to customize your workouts. The spacious running surface and cushioned deck provide a comfortable and joint-friendly running experience. With a user-friendly console and heart rate monitoring, this treadmill is perfect for both beginners and experienced runners.",
    "priceCents": 49999,
    "category": "Equipment",
    "brand": "YoggaEase",
    "stock": 30,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Ftreadmill.jpg?alt=media&token=12ff8167-2c0a-4dbd-9db6-8beaf3720e81",
    "rating": {
      "stars": 4.8,
      "numberOfRatings": 40
    }
  },
  {
    "id": 14,
    "name": "Versatile Home Exercise Mat",
    "description":
      "Enhance your home workouts with our Versatile Home Exercise Mat, designed for various fitness activities. This mat features a non-slip surface and cushioned support, providing comfort and stability during exercises. Perfect for yoga, pilates, stretching, or bodyweight workouts, this mat is a versatile addition to your home gym. The lightweight and portable design makes it easy to roll up and store, while the easy-to-clean surface ensures hygiene.",
    "priceCents": 2999,
    "category": "Equipment",
    "brand": "SupportPlus",
    "stock": 100,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Fhome_exercise_mat.jpg?alt=media&token=dd357c68-afa7-43e9-9253-123311128d03",
    "rating": {
      "stars": 4.7,
      "numberOfRatings": 50
    }
  },
  {
    "id": 15,
    "name": "Multi-Function Resistance Bands Set",
    "description":
      "Boost your strength training with our Multi-Function Resistance Bands Set, suitable for all fitness levels. This set includes multiple bands with different resistance levels, allowing you to customize your workouts. The high-quality latex material ensures durability and elasticity, while the included handles and ankle straps provide versatility. Perfect for home workouts, physical therapy, or travel, this resistance bands set is a convenient and effective way to enhance your fitness routine.",
    "priceCents": 1599,
    "category": "Equipment",
    "brand": "ActiveFit",
    "stock": 150,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Fresistace_bands_set.jpg?alt=media&token=8fb064ae-60cb-4b1f-8b00-5497f40bc8ba",
    "rating": {
      "stars": 4.6,
      "numberOfRatings": 55
    }
  },
  {
    "id": 16,
    "name": "Precision Digital Body Weight Scale",
    "description":
      "Monitor your progress with our Precision Digital Body Weight Scale, featuring advanced sensors and a sleek design. This scale offers accurate and reliable measurements, helping you track your weight and fitness goals. The large LCD display and user-friendly interface make it easy to use, while the durable construction ensures long-lasting performance. With a modern design that complements any bathroom, this scale is a must-have for health-conscious individuals.",
    "priceCents": 2499,
    "category": "Equipment",
    "brand": "SportPro",
    "stock": 90,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Fbody_weight_scale.jpg?alt=media&token=dc44f951-3f84-462d-b355-0b6737f3ab4d",
    "rating": {
      "stars": 4.7,
      "numberOfRatings": 35
    }
  },
  {
    "id": 17,
    "name": "Comfort Foam Exercise Roller",
    "description":
      "Improve your flexibility and recovery with our Comfort Foam Exercise Roller, perfect for post-workout massages. This roller features a high-density foam construction that provides firm support and durability. Use it to target sore muscles, improve circulation, and enhance flexibility. Whether you're a beginner or a seasoned athlete, this foam roller is a valuable tool for injury prevention and recovery. Its lightweight design makes it easy to carry and store.",
    "priceCents": 1999,
    "category": "Equipment",
    "brand": "CozyGym",
    "stock": 120,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Fexercise_roller.jpg?alt=media&token=f84eda53-e64d-477c-ade5-cbbcdd5878e2",
    "rating": {
      "stars": 4.4,
      "numberOfRatings": 40
    }
  },
  {
    "id": 18,
    "name": "Advanced Elliptical Trainer Machine",
    "description":
      "Our Advanced Elliptical Trainer Machine offers a full-body workout experience with its low-impact design and adjustable resistance levels. This machine features a smooth and quiet operation, making it ideal for home use. The advanced tracking features include heart rate monitoring, workout programs, and a user-friendly console. With its sturdy construction and ergonomic design, this elliptical trainer provides an effective and comfortable workout for all fitness levels.",
    "priceCents": 79999,
    "category": "Equipment",
    "brand": "Athleisure",
    "stock": 20,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Felliptical_machine.jpg?alt=media&token=b10c0339-9db6-4d4c-9818-403315731288",
    "rating": {
      "stars": 4.9,
      "numberOfRatings": 50
    }
  },
  {
    "id": 19,
    "name": "Multifunctional Home Gym Station",
    "description":
      "Our Multifunctional Home Gym Station provides a full-body workout experience with its various exercise stations and adjustable settings. This gym station includes a variety of workout options, from weightlifting to resistance training, allowing you to customize your fitness routine. The durable construction and ergonomic design ensure safety and comfort during exercises. Perfect for home use, this gym station is a comprehensive solution for all your fitness needs.",
    "priceCents": 129999,
    "category": "Equipment",
    "brand": "RunFlex",
    "stock": 15,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fno-image.jpg?alt=media&token=c48c943d-9813-4b86-86cd-289d9eb4c436",
    "rating": {
      "stars": 4.8,
      "numberOfRatings": 30
    }
  },
  {
    "id": 20,
    "name": "Adjustable Multi-Position Weight Bench",
    "description":
      "Our premium adjustable weight bench offers multiple positions for a variety of strength training exercises. With high-density foam padding and heavy-duty steel construction, it's perfect for both beginners and advanced athletes.",
    "priceCents": 8999,
    "category": "Equipment",
    "brand": "YogaEase",
    "stock": 30,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Fmulti_purpose_work_bench.jpg?alt=media&token=906b9e52-242b-4fe3-afb6-5c151754975e",
    "rating": {
      "stars": 4.8,
      "numberOfRatings": 50
    }
  },
  {
    "id": 21,
    "name": "High-Quality Whey Protein Powder",
    "description":
      "Fuel your muscles with our high-quality whey protein powder. Ideal for post-workout recovery, it provides essential amino acids to help rebuild and strengthen muscles.",
    "priceCents": 2999,
    "category": "Supplements",
    "brand": "ActiveFit",
    "stock": 100,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Fwhey_protein.jpg?alt=media&token=b802442c-0e09-4d2e-918c-d17697fecb5a",
    "rating": {
      "stars": 4.9,
      "numberOfRatings": 80
    }
  },
  {
    "id": 22,
    "name": "Micronized Creatine Monohydrate Supplement",
    "description":
      "Boost your athletic performance with our micronized creatine monohydrate supplement. Known for its ability to increase strength, enhance energy, and improve muscle gains.",
    "priceCents": 1999,
    "category": "Supplements",
    "brand": "SportPro",
    "stock": 70,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Fmonohydrate.jpg?alt=media&token=09814f08-64ed-4c05-b46a-95bd511645ce",
    "rating": {
      "stars": 4.8,
      "numberOfRatings": 60
    }
  },
  {
    "id": 23,
    "name": "Energizing Pre-Workout Supplement",
    "description":
      "Maximize your workout with our energizing pre-workout supplement, designed to enhance energy, focus, and endurance for intense training sessions.",
    "priceCents": 2499,
    "category": "Supplements",
    "brand": "CozyGym",
    "stock": 80,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Fpre_exercise_supplement.jpg?alt=media&token=bb09c00f-353d-488b-af5d-eb5497cd1386",
    "rating": {
      "stars": 4.7,
      "numberOfRatings": 50
    }
  },
  {
    "id": 24,
    "name": "Branched-Chain Amino Acids (BCAA) Supplement",
    "description":
      "Support muscle recovery and growth with our BCAA supplement. It provides the essential amino acids that help reduce fatigue and improve endurance.",
    "priceCents": 2199,
    "category": "Supplements",
    "brand": "Athleisure",
    "stock": 60,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2FBcaa_supplement.jpg?alt=media&token=44981089-7494-40f1-a0f3-fb2f50479c98",
    "rating": {
      "stars": 4.9,
      "numberOfRatings": 55
    }
  },
  {
    "id": 25,
    "name": "Daily Multivitamin for Overall Health",
    "description":
      "Ensure your body receives all the necessary nutrients with our daily multivitamin. Formulated to support energy, immunity, and overall health.",
    "priceCents": 1299,
    "category": "Supplements",
    "brand": "RunFlex",
    "stock": 90,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Fmulti_vitamins.jpg?alt=media&token=24bad479-8207-4a34-821b-b7a8fa5f85cd",
    "rating": {
      "stars": 4.5,
      "numberOfRatings": 40
    }
  },
  {
    "id": 26,
    "name": "Omega-3 Fish Oil Supplement for Heart Health",
    "description":
      "Promote heart health and overall well-being with our Omega-3 fish oil supplement. Rich in essential fatty acids to support cardiovascular and cognitive health.",
    "priceCents": 1499,
    "category": "Supplements",
    "brand": "YogaEase",
    "stock": 70,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Fomega_3.jpg?alt=media&token=b107f27b-cf5a-432f-80dd-10bf5f0c70e7",
    "rating": {
      "stars": 4.6,
      "numberOfRatings": 30
    }
  },
  {
    "id": 27,
    "name": "Pure Glutamine Supplement for Recovery",
    "description":
      "Enhance muscle recovery and reduce soreness with our pure glutamine supplement. Ideal for post-workout recovery and immune support.",
    "priceCents": 1799,
    "category": "Supplements",
    "brand": "SupportPlus",
    "stock": 10,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Fglutamine_supplement.jpg?alt=media&token=7532245f-1c47-4db3-b27c-1d720776af9d",
    "rating": {
      "stars": 4.7,
      "numberOfRatings": 45
    }
  },
  {
    "id": 28,
    "name": "Vitamin D Supplement for Bone Health",
    "description":
      "Support bone health and immune function with our Vitamin D supplement. Essential for maintaining healthy bones and a strong immune system.",
    "priceCents": 999,
    "category": "Supplements",
    "brand": "ActiveFit",
    "stock": 100,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Fvitamin_d.jpg?alt=media&token=6ab6204f-e730-4d2a-a547-a66a2f993ddb",
    "rating": {
      "stars": 4.5,
      "numberOfRatings": 50
    }
  },
  {
    "id": 29,
    "name": "ZMA Supplement for Recovery and Sleep",
    "description":
      "Improve muscle recovery and sleep quality with our ZMA supplement. Contains zinc, magnesium, and vitamin B6 for optimal recovery.",
    "priceCents": 1199,
    "category": "Supplements",
    "brand": "SportPro",
    "stock": 80,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Fzma_supplement.jpg?alt=media&token=204a3efd-ab5b-4451-8d98-98fdfe53df6f",
    "rating": {
      "stars": 4.6,
      "numberOfRatings": 40
    }
  },
  {
    "id": 30,
    "name": "L-Carnitine Fat-Burning Supplement",
    "description":
      "Boost your metabolism and support fat burning with our L-Carnitine supplement. Ideal for athletes looking to improve energy and endurance.",
    "priceCents": 1899,
    "category": "Supplements",
    "brand": "CozyGym",
    "stock": 60,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Fl_carnitine.jpg?alt=media&token=6a914f8f-b565-4f31-a597-7ee2d027e9ab",
    "rating": {
      "stars": 4.7,
      "numberOfRatings": 35
    }
  },
  {
    "id": 31,
    "name": "Beta-Alanine Supplement for Endurance",
    "description":
      "Enhance your workout endurance with our Beta-Alanine supplement. Helps reduce fatigue and improve muscle performance.",
    "priceCents": 1699,
    "category": "Supplements",
    "brand": "Athleisure",
    "stock": 50,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Fbeta_alanine.jpg?alt=media&token=5aab2553-0721-4d15-ba9f-1293aa0eb9d7",
    "rating": {
      "stars": 4.8,
      "numberOfRatings": 25
    }
  },
  {
    "id": 32,
    "name": "Spacious and Durable Gym Bag",
    "description":
      "Carry all your workout essentials with our spacious and durable gym bag. Features multiple compartments and a comfortable shoulder strap.",
    "priceCents": 2599,
    "category": "Accessories",
    "brand": "RunFlex",
    "stock": 70,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Fgym_bag.jpg?alt=media&token=059a6a95-0197-4094-b95a-229284f29802",
    "rating": {
      "stars": 4.8,
      "numberOfRatings": 40
    }
  },
  {
    "id": 33,
    "name": "Durable and Leak-Proof Water Bottle",
    "description":
      "Stay hydrated during workouts with our durable and leak-proof water bottle. Made from BPA-free materials and easy to carry.",
    "priceCents": 999,
    "category": "Accessories",
    "brand": "YogaEase",
    "stock": 150,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Fleak_proof_water_bottle.jpg?alt=media&token=2d76242d-2319-4802-b61a-95c8a4ccd598",
    "rating": {
      "stars": 4.5,
      "numberOfRatings": 35
    }
  },
  {
    "id": 34,
    "name": "Super Absorbent Sweat Towel",
    "description":
      "Keep dry during intense workouts with our super absorbent sweat towel. Soft, durable, and easy to wash.",
    "priceCents": 599,
    "category": "Accessories",
    "brand": "SupportPlus",
    "stock": 200,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Fsweat_towel.jpg?alt=media&token=1da69987-aec9-46a8-92eb-be3735560a36",
    "rating": {
      "stars": 4.6,
      "numberOfRatings": 45
    }
  },
  {
    "id": 35,
    "name": "Supportive Weightlifting Belt",
    "description":
      "Protect your back during heavy lifts with our supportive weightlifting belt. Ergonomically designed for comfort and stability.",
    "priceCents": 2999,
    "category": "Accessories",
    "brand": "ActiveFit",
    "stock": 40,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Fweightlift_belt.jpg?alt=media&token=a2d84dd4-d835-4ddf-8230-8155cd8e5a85",
    "rating": {
      "stars": 4.7,
      "numberOfRatings": 25
    }
  },
  {
    "id": 36,
    "name": "Adjustable Wrist Wraps for Weightlifting",
    "description":
      "Enhance your grip and support your wrists with our adjustable wrist wraps. Perfect for weightlifting and other strength training exercises.",
    "priceCents": 1499,
    "category": "Accessories",
    "brand": "SportPro",
    "stock": 80,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Fwrist_wrap.jpg?alt=media&token=0f4329b2-0823-4908-8a02-c02e7fe5b6bb",
    "rating": {
      "stars": 4.8,
      "numberOfRatings": 30
    }
  },
  {
    "id": 37,
    "name": "Sweat-Wicking Sports Headband",
    "description":
      "Stay cool and focused with our sweat-wicking sports headband. Comfortable and ideal for all types of workouts.",
    "priceCents": 799,
    "category": "Accessories",
    "brand": "CozyGym",
    "stock": 120,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Fheadband.jpg?alt=media&token=1868e7c8-b546-4c7a-b776-f3304d06c86e",
    "rating": {
      "stars": 4.6,
      "numberOfRatings": 40
    }
  },
  {
    "id": 38,
    "name": "Protective Jump Rope Mat",
    "description":
      "Protect your floors and enhance your jump rope workouts with our durable jump rope mat. Non-slip and easy to clean.",
    "priceCents": 1999,
    "category": "Accessories",
    "brand": "Athleisure",
    "stock": 60,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Fjump_rope_mat.jpg?alt=media&token=dd6f1256-9a72-4db6-8394-8e4891c8fcc7",
    "rating": {
      "stars": 4.5,
      "numberOfRatings": 25
    }
  },
  {
    "id": 39,
    "name": "Hand Grip Strengthener for Forearms",
    "description":
      "Improve your grip and strengthen your forearms with our hand grip strengthener. Adjustable resistance for all levels.",
    "priceCents": 1199,
    "category": "Accessories",
    "brand": "RunFlex",
    "stock": 90,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Fhand_grip_stregthener.jpg?alt=media&token=a42acb0e-2b40-45ab-bd7a-c97f3b00b318",
    "rating": {
      "stars": 4.7,
      "numberOfRatings": 35
    }
  },
  {
    "id": 40,
    "name": "Foam Block for Yoga and Stretching",
    "description":
      "Enhance your yoga and stretching exercises with our supportive foam block. Lightweight, durable, and available in various colors.",
    "priceCents": 1299,
    "category": "Accessories",
    "brand": "YogaEase",
    "stock": 80,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Ffoam_block_for_yoga.jpg?alt=media&token=12e434a3-ae28-480a-a0c6-75bad6b646d6",
    "rating": {
      "stars": 4.8,
      "numberOfRatings": 30
    }
  },
  {
    "id": 41,
    "name": "Fun and Challenging Exercise Dice",
    "description":
      "Make workouts more exciting with our fun exercise dice. Great for adding variety and challenge to your fitness routine.",
    "priceCents": 899,
    "category": "Accessories",
    "brand": "SupportPlus",
    "stock": 110,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Fexercise_dice.jpg?alt=media&token=9e2f91a3-4de9-493f-ab86-4b27e07dc04f",
    "rating": {
      "stars": 4.6,
      "numberOfRatings": 20
    }
  },
  {
    "id": 42,
    "name": "Versatile Resistance Tube for Strength Training",
    "description":
      "Add resistance to your workouts with our versatile resistance tube. Perfect for home workouts, physical therapy, and more.",
    "priceCents": 1099,
    "category": "Accessories",
    "brand": "ActiveFit",
    "stock": 100,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Fresistance_tube.jpg?alt=media&token=bb9f191e-1273-4d78-a8f9-20b8af742e68",
    "rating": {
      "stars": 4.7,
      "numberOfRatings": 40
    }
  },
  {
    "id": 43,
    "name": "Massage Stick for Muscle Recovery",
    "description":
      "Relieve muscle tension and improve recovery with our massage stick. Ergonomically designed for easy use on all muscle groups.",
    "priceCents": 1799,
    "category": "Accessories",
    "brand": "SportPro",
    "stock": 70,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Fmassage_stick.jpg?alt=media&token=9482a9e8-27d5-4707-a9fe-61861779b5a7",
    "rating": {
      "stars": 4.8,
      "numberOfRatings": 50
    }
  },
  {
    "id": 44,
    "name": "Protective Gym Gloves for Weightlifting",
    "description":
      "Protect your hands and enhance your grip with our durable gym gloves. Designed for weightlifting and all types of workouts.",
    "priceCents": 1599,
    "category": "Accessories",
    "brand": "CozyGym",
    "stock": 90,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Fgym_gloves.jpg?alt=media&token=d0eb41e5-a5dd-4436-9b81-0222c12fb975",
    "rating": {
      "stars": 4.6,
      "numberOfRatings": 35
    }
  },
  {
    "id": 45,
    "name": "Convenient Shaker Bottle for Protein Shakes",
    "description":
      "Mix your protein shakes with ease using our convenient shaker bottle. Leak-proof design and easy to clean.",
    "priceCents": 999,
    "category": "Accessories",
    "brand": "Athleisure",
    "stock": 140,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Fshaker_bottle.jpg?alt=media&token=2eabd202-350b-4747-af3d-05cfba7517cb",
    "rating": {
      "stars": 4.7,
      "numberOfRatings": 45
    }
  },
  {
    "id": 46,
    "name": "Yoga Strap for Stretching and Flexibility",
    "description":
      "Enhance your yoga practice with our durable yoga strap. Perfect for stretching, flexibility, and alignment exercises.",
    "priceCents": 899,
    "category": "Accessories",
    "brand": "RunFlex",
    "stock": 100,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Fyoga_strap.jpg?alt=media&token=6f960b61-d208-4340-ac4e-10288ccf6276",
    "rating": {
      "stars": 4.8,
      "numberOfRatings": 30
    }
  },
  {
    "id": 47,
    "name": "Non-Slip Gym Mat for Exercises",
    "description":
      "Perform your exercises safely with our non-slip gym mat. Comfortable, durable, and easy to roll up for storage.",
    "priceCents": 1899,
    "category": "Accessories",
    "brand": "YogaEase",
    "stock": 70,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Fnon_slip_mat.jpg?alt=media&token=26a00d38-cc85-4ca0-9b7b-41d83c9d8093",
    "rating": {
      "stars": 4.7,
      "numberOfRatings": 25
    }
  },
  {
    "id": 48,
    "name": "Comfortable Yoga Mat for All Practices",
    "description":
      "Experience comfort and stability with our high-quality yoga mat. Suitable for all types of yoga and floor exercises.",
    "priceCents": 2199,
    "category": "Accessories",
    "brand": "SupportPlus",
    "stock": 60,
    "imageUrl":
      "https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/shop%2Fproducts%2Fyoga_mat_for_all.jpg?alt=media&token=8e5fbe27-059d-44dd-b2d1-1715efd48937",
    "rating": {
      "stars": 4.8,
      "numberOfRatings": 50
    }
  }
];
export default products;
