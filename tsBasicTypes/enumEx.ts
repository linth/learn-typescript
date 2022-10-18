/**
 * Enum type
 * 
 * 
 * Reference:
 *  - https://pjchender.dev/typescript/ts-basic-types/#enum
 */

// enum basic usage.
{
    enum Color {
        red, 
        green,
        blue
    }

    const c: Color = Color.red;
    console.log('c', c); // 0
    

    enum SelectableButtonTypes {
        Important = 'important',
        Optional = 'optional',
        Irrelevant = 'irrelevant',
    }

    const s: SelectableButtonTypes = SelectableButtonTypes.Important;
    console.log('s', s); // s important
}

{
    enum BE_ENUM_TIME_UNIT {
        year = 'year',
        month = 'month',
        day = 'day',
    }

    const setOneDay = {
        [BE_ENUM_TIME_UNIT.year]: 2022,
        [BE_ENUM_TIME_UNIT.month]: 10,
        [BE_ENUM_TIME_UNIT.day]: 10,
    };

    console.log('setOneDay', setOneDay);

    const a = Math.random() > 0.5 ? BE_ENUM_TIME_UNIT.month : null;
    console.log('a', a);    
}


// 判斷不同的 enum type
// 有時物件搭配 enum 是，也會需要 as const 來讓 TS 更明確知道該物件值的型別
{
    type Nullable<T> = T | null;

    // 建立兩個 enum types
    enum TW_TIME {
        year = 'tw_year',
        month = 'tw_month',
        day = 'tw_day',
    }

    enum US_TIME {
        year = 'us_year',
        month = 'us_month',
        day = 'us_day',
    }

    const a = Math.random() > 0.05 ? TW_TIME.month : null;

    // 利用 type 來確認是否類型是符合
    // TODO: add the example.
    // let unit: Nullable<TW_TIME.month | US_TIME.day> = a ? true : false;
    // console.log('unit', unit);
}



