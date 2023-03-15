INSERT INTO TAG(TAG_ID, TAG_INFO, TAG_NAME) VALUES (1, '어떨때', '데이트');
INSERT INTO TAG(TAG_ID, TAG_INFO, TAG_NAME) VALUES (2, '어떨때', '효도');
INSERT INTO TAG(TAG_ID, TAG_INFO, TAG_NAME) VALUES (3, '어떨때', '뜨거운 날');
INSERT INTO TAG(TAG_ID, TAG_INFO, TAG_NAME) VALUES (4, '어떨때', '선물');
INSERT INTO TAG(TAG_ID, TAG_INFO, TAG_NAME) VALUES (5, '어떨때', '파티');
INSERT INTO TAG(TAG_ID, TAG_INFO, TAG_NAME) VALUES (6, '어떨때', '손님');
INSERT INTO TAG(TAG_ID, TAG_INFO, TAG_NAME) VALUES (7, '어떨때', '해변');
INSERT INTO TAG(TAG_ID, TAG_INFO, TAG_NAME) VALUES (8, '어떨때', '육류');
INSERT INTO TAG(TAG_ID, TAG_INFO, TAG_NAME) VALUES (9, '가격대', 'Entry-Level');
INSERT INTO TAG(TAG_ID, TAG_INFO, TAG_NAME) VALUES (10, '가격대', 'Mid-Range');
INSERT INTO TAG(TAG_ID, TAG_INFO, TAG_NAME) VALUES (11 , '가격대', 'Premium');
INSERT INTO TAG(TAG_ID, TAG_INFO, TAG_NAME) VALUES (12, '가격대', 'High-End');
INSERT INTO TAG(TAG_ID, TAG_INFO, TAG_NAME) VALUES (13, '가격대', 'Luxury');
INSERT INTO TAG(TAG_ID, TAG_INFO, TAG_NAME) VALUES (14, '맛', '나무향');
INSERT INTO TAG(TAG_ID, TAG_INFO, TAG_NAME) VALUES (15, '맛', '초코향');
INSERT INTO TAG(TAG_ID, TAG_INFO, TAG_NAME) VALUES (16, '맛', '과실향');
INSERT INTO TAG(TAG_ID, TAG_INFO, TAG_NAME) VALUES (17, '맛', '가죽향');
INSERT INTO TAG(TAG_ID, TAG_INFO, TAG_NAME) VALUES (18, '맛', '견과류향');
INSERT INTO TAG(TAG_ID, TAG_INFO, TAG_NAME) VALUES (19, '맛', '약국냄새');
INSERT INTO TAG(TAG_ID, TAG_INFO, TAG_NAME) VALUES (20, '종류', '블랜디드');
INSERT INTO TAG(TAG_ID, TAG_INFO, TAG_NAME) VALUES (21, '종류', '블랜디드 몰트');
INSERT INTO TAG(TAG_ID, TAG_INFO, TAG_NAME) VALUES (22, '종류', '버번');
INSERT INTO TAG(TAG_ID, TAG_INFO, TAG_NAME) VALUES (23, '종류', '아일라');
INSERT INTO TAG(TAG_ID, TAG_INFO, TAG_NAME) VALUES (24, '종류', '싱글몰트');
INSERT INTO TAG(TAG_ID, TAG_INFO, TAG_NAME) VALUES (25, '종류', '셰리');
INSERT INTO TAG(TAG_ID, TAG_INFO, TAG_NAME) VALUES (26, '종류', '테네시');
INSERT INTO TAG(TAG_ID, TAG_INFO, TAG_NAME) VALUES (27, '종류', '브랜디');
INSERT INTO TAG(TAG_ID, TAG_INFO, TAG_NAME) VALUES (28, '종류', '꼬냑');
INSERT INTO TAG(TAG_ID, TAG_INFO, TAG_NAME) VALUES (29, '페어링', '치즈');
INSERT INTO TAG(TAG_ID, TAG_INFO, TAG_NAME) VALUES (30, '페어링', '육포');
INSERT INTO TAG(TAG_ID, TAG_INFO, TAG_NAME) VALUES (31, '페어링', '살라미');
INSERT INTO TAG(TAG_ID, TAG_INFO, TAG_NAME) VALUES (32, '페어링', '하몽');
INSERT INTO TAG(TAG_ID, TAG_INFO, TAG_NAME) VALUES (33, '페어링', '과일');
INSERT INTO TAG(TAG_ID, TAG_INFO, TAG_NAME) VALUES (34, '페어링', '초콜릿');
INSERT INTO TAG(TAG_ID, TAG_INFO, TAG_NAME) VALUES (35, '페어링', '견과류');
INSERT INTO TAG(TAG_ID, TAG_INFO, TAG_NAME) VALUES (36, '페어링', '채소');
INSERT INTO TAG(TAG_ID, TAG_INFO, TAG_NAME) VALUES (37, '페어링', '해산물');
INSERT INTO TAG(TAG_ID, TAG_INFO, TAG_NAME) VALUES (38, '페어링', '어란');


INSERT INTO DRINK(DRINK_ID, DRINK_ABV, DRINK_CODE, DRINK_IMAGE_URL, DRINK_NAME, PRICE_RANK) VALUES (1, 40, 'WYK', 'sampleurl', '싱글 몰트 위스키', 'Entry_Level');
INSERT INTO TAG_DRINK(TAG_BOARD_ID, DRINK_DRINK_ID, TAG_TAG_ID) VALUES (1, 1, 1);
INSERT INTO TAG_DRINK(TAG_BOARD_ID, DRINK_DRINK_ID, TAG_TAG_ID) VALUES (2, 1, 2);

INSERT INTO ARTICLE(TITLE) VALUES ('위스키를 아시나요?');
INSERT INTO SECTION(SECTION_CONTENT, SECTION_TITLE, ARTICLE_ID) VALUES ('여러분은 바에 가보신 적 있어요? :wine_glass:
어땠어요?

저는 모르는 이름이 너무 많아서 아무 것도 모르고
코카콜라 맛있다로 찍은 기억 밖에 안나네요.😂

하지만 이렇게 어려운 양주 이름들 사이에서도 가장 먼저 들어오는 이름은 있어요!
여러분은 위스키를 아시나요 :) ?

사람마다 다르겠지만, 많은 사람이 위스키를 알고있다는 것에는 동의할거에요.
양주 종류 3가지만 생각해보라고 하면 꼭! 위스키는 들어갈거구요.

그만큼 위스키는 잘은 몰라도 꽤나 즐겨마시는 양주라고 짐작할 수 있어요.

위스키에 대해서만이라도 어느정도 알고 간다면
바에 들어갔을 때, 코카콜라로 찍을 일은 줄어들거에요.
친한 친구나 연인에게 아는 척 할 수 있는 기회는 덤이구요. (ㅋㅋ)

게다가, 위스키를 알면 다른 양주가 만들어지는 과정을 쉽게 이해할 수 있어요.
시작은 위스키여도 결과적으로는 위스키를 기준으로 다른 양주들에 대한 이해도가 높아지는거죠.

서론이 길었네요. 그럼 같이 여정을 떠나볼까요?','여정의 시작', 1);
INSERT INTO SECTION(SECTION_CONTENT, SECTION_TITLE, ARTICLE_ID) VALUES ('위스키에 대해 알아가기 전에, 간단하게 양조주와 증류주의 개념을 알아야해요.','여정을 떠나기 위한 준비',1);


INSERT INTO ARTICLE(TITLE) VALUES ('위스키의 탄생');
INSERT INTO ARTICLE(TITLE) VALUES ('위스키 제조 과정 -상-');
INSERT INTO ARTICLE(TITLE) VALUES ('위스키 제조 과정 -하-');
INSERT INTO ARTICLE(TITLE) VALUES ('위스키 시음');
INSERT INTO ARTICLE(TITLE) VALUES ('위스키 종류 알아보기');




INSERT INTO IMAGE(FILE_NAME, IMG_URL) VALUES('캡처1.JPG','sample_url1');
INSERT INTO IMAGE(FILE_NAME, IMG_URL) VALUES('캡처2.JPG','sample_url2');
INSERT INTO MEMBER(DISPLAY_NAME, EMAIL, OAUTH_TYPE) VALUES('moon full', 'fullmoon7813@gmail.com', 'google');