const THEME_PRIMARY = "#a503fc"
const THEME_PRIMARY_DARK = "#8108c2"
const THEME_PRIMARY_LIGHT = "#c65cff"
const THEME_TRANSPARENT = "rgba(165, 3, 252, 0.1)"

const THEME_SECONDARY = ""
const THEME_SECONDARY_DARK = ""
const THEME_SECONDARY_LIGHT = ""


const BLACK = "#212121"
const WHITE = "#fafafa"
const GREY = "#757575"
const BLUE = "#4D81FF"
const BLUE_TRANSPARENT = "rgba(77, 129, 255, 0.3)"
const DARK_BLUE = "4D81FF"
const GREEN = "#50CB55"
const GREEN_TRANSPARENT = "rgba(80, 203, 85, 0.3)"
const DARK_GREEN = "#22C229"
const YELLOW = "#FFC300"
const DARK_GREY = "#494949"
const LIGHT_GREY = "#a4a4a4"
const GREY_TRANSPARENT = "rgba(220, 220, 220, 0.5)"
const GREY_TRANSPARENT_LITE = "rgba(220, 220, 220, 0.2)"
const PURPLE = "#70519F"

const D_SALE_BODY = "#7fd795"
const D_SALE_HEADER = "#e2f7e9"

const D_RECEIPT_BODY = "#a281ea"
const D_RECEIPT_HEADER = "#edeafb"

const D_ORDER_BODY = "#fdab86"
const D_ORDER_HEADER = "#ffefe6"


const D_DELIVERY_BODY =  "#fdab86"
const D_DELIVERY_HEADER = "#ffefe6"

const D_INVENTORY_HEADER = "#eee2f7"
const D_INVENTORY_BODY = "#d196d7"

const D_CUSTOMERS_BODY = "#f88ea0"
const D_CUSTOMERS_HEADER = "#fde5e6"

const INFO = "#0099CC"
const SUCCESS = "#007E33"
const WARNING = "#FF8800"
const DANGER = "#CC0000"

const ELEGANT = "#2E2E2E"
const ELEGANT_DARK = "#212121"
const STYLISH = "#4B515D"
const STYLISH_DARK = "#3E4551"

export const TXT_COLORS ={

    DEAFULT : STYLISH,

    PRIMARY : THEME_PRIMARY,
    PRIMARY_DARK : THEME_PRIMARY_DARK,
    PRIMARY_LIGHT: THEME_PRIMARY_LIGHT,

    BLACK,
    WHITE,
    GREY,
    DARK_GREY,
    LIGHT_GREY
}

export const ICON_COLORS = {
    TAB_BAR_BOTTOM: WHITE,
    HEADER_BAR:WHITE,
    HEADER_TINT_COLOR:"purple",  // purple / #0053ab / #3700B3
    TEXT_BOX:THEME_PRIMARY,
    DASHBOARD:THEME_PRIMARY,
    TAB_BAR_TOP:WHITE,
    NONE:DARK_GREY,
    LOGIN_INPUT:THEME_PRIMARY,
    PRIMARY : THEME_PRIMARY,
    PRIMARY_DARK : THEME_PRIMARY_DARK,
    PRIMARY_LIGHT: THEME_PRIMARY_LIGHT,
    DASHBOARD_CARD_HEADER: DARK_GREY,
    BLACK,
    WHITE,
    GREY,
}

export const STATUS_COLORS = (state) => {

        if(state == 'Not Paid')return "#f44336"
        if(state == "Paid")return "#4caf50"
        if(state == "In Payment")return "#8bc34a"
        if(state == 'Sales Order') return "#f44336"
        if(state == "Quotation") return "#2196f3"
        if(state == "Quotation Sent") return '#03a9f4'
        if(state == 'Locked') return  "#9e9e9e"
        if(state == 'Cancelled') return  "#ff5722"
        if(state == 'To Invoice') return  "#FFC300"

        return "00bcd4"
}

export const COLORS = {
                ERROR:DANGER,
                THEME:THEME_PRIMARY,
                THEME_DARK:THEME_PRIMARY_DARK,
                THEME_LIGHT:THEME_PRIMARY_LIGHT,
                THEME_TRANSPARENT:THEME_TRANSPARENT,
                BLACK,
                WHITE,
                BLUE,
                BLUE_TRANSPARENT,
                DARK_BLUE,
                GREEN,
                GREEN_TRANSPARENT,
                DARK_GREEN,
                YELLOW,
                GREY,
                DARK_GREY,
                LIGHT_GREY,
                GREY_TRANSPARENT,
                GREY_TRANSPARENT_LITE,
                LINE: "#E1E1E1",
                PURPLE,
                

                INFO,
                WARNING,
                SUCCESS,
                DANGER,

                D_SALE_BODY,
                D_SALE_HEADER,

                D_RECEIPT_BODY ,
                D_RECEIPT_HEADER,
                D_ORDER_BODY ,
                D_ORDER_HEADER,
                D_DELIVERY_BODY,
                D_DELIVERY_HEADER,
                D_INVENTORY_BODY,
                D_INVENTORY_HEADER,
                D_CUSTOMERS_BODY,
                D_CUSTOMERS_HEADER,

                BTN_SUBMIT:"",
                BTN_CANCEL:"",
                BTN_RADIO:"",
                
                BORDER_TXT_BOX:"#e4e4e4",
                BORDER_CARD:"#e4e4e4",

                PLACEHOLDER:"",
                
                TXT_PRIMARY:THEME_PRIMARY,

                TXT_HEADER:"",
                TXT_MOVING:"green",

                ICON_NAV_BAR:"",
                ICON_TAB_BAR:"",
                ICON_DESKTOP:"",  
                
                SALE_CALC_AREA:DARK_GREY,
                SALE_CALC_AREA_TXT:"white",

                SELL_DETAILS_CARD_TXT:DARK_GREY,
                SELL_DETAILS_CARD_ITEM_TXT:WHITE,

                STOCK_COLOR:"#7E57C2",
                SELL_DETAILS_QTY:"#0d47a1",
                SELL_DETAILS_DISCOUNT:"#0d47a1",
                SELL_DETAILS_TAXES:"#0d47a1",
                SELL_DETAILS_TOTAL:"#0d47a1",
            }