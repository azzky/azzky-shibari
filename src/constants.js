const Maindata = {
    url: 'https://azzky.ru',
    author: 'Azzky',
    socials: {
        instagram: 'https://www.instagram.com/azzky_gallery/',
        linkedin: 'https://www.linkedin.com/u/azzky',
        telegram: 'https://t.me/shibaribyazzky',
        twitter: 'https://twitter.com/AzzkyDemiurg'
    },
    shinies: 'https://leekduck.com/shiny/?nickname=azzky&show=all&lang=en&dex=1-2-3-4-5-6-6_51-6_52-13-14-15-19_61-20_61-23-24-25_11-25_27-29-30-31-32-33-34-37-38-43-54-55-63-64-65-74_61-75_61-76_61-92-93-94-95-208-111-112-122-123-125-466-126-467-129-130-133-134-136-137-233-474-140-141-144-146-150-158-159-160-193-469-198-228-229-234_08-249-251-252-258-259-260-270-271-273-274-275-280-281-282-287-288-289-304-305-306-307-308-328-329-330-335-339-340-371-372-387-388-389-390-391-392-393-394-395-425-426-436-437-443-444-487_12-487_11-491-506-507-508-519-520-521-649_11'
}

export const i18n = {
    all: 'все',
    featured: 'избранное',
    suspension: 'подвес',
    marks: 'следы от веревок',
    gundam: 'гандам',
    lego: 'лего'
}

export const PageData = {
    en: {
        shibari: {
            h1: 'Shibari by Azzky',
            title: 'Shibari by Azzky',
            description: 'I\'m Azzky and I\'m doing shibari since 2017. If you\'re looking for a shibari shooting or learning in Belarus, just contact me.',
            text: 'Shibari is a traditional Japanese art of rope bondage. I\'ve been doing it since 2017 and ready for cosplay and fashion shooting collaboration, events performing and individual training. If you are interested to work with - just'
        },
        contact: {
            h1: 'Get in touch',
            title: 'Contacts | Shibari by Azzky',
            description: '',
            text: ''
        }
    },
    ru: {
        shibari: {
            h1: 'Шибари от Azzky',
            title: 'Шибари от Azzky',
            description: 'Я Azzky и я занимаюсь шибари с 2017 года. Если тебя интересуют съемки или обучение шибари в Минске, то свяжись со мной.',
            text: 'Шибари - традиционное японское искусство веревочного бондажа. Я занимаюсь им с 2017 года и сейчас готов к коллаборации для косплей и фэшн съемок, а также к выступлениям на мероприятиях и обучению в индивидуальной форме. Если тебя интересуют съемки или обучение шибари в Минске, то'
        },
        contact: {
            h1: 'Напиши мне',
            title: 'Контакты | Шибари от Azzky',
            description: '',
        }
    }
}

export default Maindata

export const HolderSmall = {
    "images": {
        "sources": [
            {
            "srcSet": "/holder-small.png",
            "sizes": "(min-width: 1920px) 1920px, 100vw",
            "type": "image/png"
            }
        ],
        "fallback": {
            "src": "/holder-small.png",
        }
    },
    "layout": "constrained",
    "width": 400,
    "height": 600,
    "placeholder": {
        "fallback": "/holder-small.png"
    }
}

export const HolderBig = {
    "images": {
        "sources": [
            {
            "srcSet": "/holder-big.png",
            "sizes": "(min-width: 1920px) 1920px, 100vw",
            "type": "image/png"
            }
        ],
        "fallback": {
            "src": "/holder-big.png",
        }
    },
    "layout": "constrained",
    "width": 1920,
    "height": 1280,
    "placeholder": {
        "fallback": "/holder-big.png"
    }
}