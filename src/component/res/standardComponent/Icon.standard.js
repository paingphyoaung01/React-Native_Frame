import React from 'react';
import {ICON_COLORS } from '../Color'

import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import OctIcon from 'react-native-vector-icons/Octicons'
import FoundationIcon from 'react-native-vector-icons/Foundation'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'

const AntDesign = "AntDesign"
const FontAwesome = "FontAwesome"
const FontAwesome5 = "FontAwesome5"
const Material = "MaterialIcon"
const Oct = "OctIcon"
const Foundation = "Foundation"
const MaterialCommunity = "MaterialCommunity"
const Ionic = "Ionic"
const EvilIcons = "Evil"


export const STANDARD_ICONS = {
    drawer_menu:{name:"ios-menu",file:Ionic},
    sell:{name:"ios-pricetags",file:Ionic},
    categories:{name:"ios-grid",file:Ionic},
    close:{name:"ios-close-sharp",file:Ionic},
    ios_location:{name:"ios-location",file:Ionic},
    gift:{name:"gift",file:FontAwesome5},
    heart:{name:"heart-outline",file:MaterialCommunity},
    bell:{name:"bell",file:FontAwesome5},
    sync:{name:'sync',file:FontAwesome5},
    library:{name:'my-library-books',file:Material},
    user:{name:'user',file:Feather},
    location_arrow:{name:'location-arrow',file:FontAwesome5},
    arrow_back: {name:"ios-arrow-back-sharp", file:Ionic},
    notification: {name:"ios-notifications", file:Ionic},
    home:{name:"home-outline",file:MaterialCommunity},
    setting: {name:"ios-settings-sharp", file:Ionic},
}

const LOCATED = {
    // TAB_BAR_BOTTOM:"TAB_BAR_BOTTOM",
    // HEADER_BAR:"HEADER_BAR",
    // TEXT_BOX:"TEXT_BOX",
    // DASHBOARD:"DASHBOARD",
    // TAB_BAR_TOP:"TAB_BAR_TOP",
    // SHIPMENT_ADD_NAV: "SHIPMENT_ADD_NAV",
    // NONE:"NONE",
    // LOGIN_INPUT:"LOGIN_INPUT",
    // DASHBOARD_CARD_HEADER:"DASHBOARD_CARD_HEADER"
}

const ICON_SIZE = {
    DRAWER_ICON: 28,
    BELL_ICON: 22,
    // TAB_BAR_BOTTOM:25,
    // HEADER_BAR:25,
    // TEXT_BOX:30,
    // DASHBOARD:25,
    // TAB_BAR_TOP:25,
    // SHIPMENT_ADD_NAV:25,
    // NONE:25,
    // LOGIN_INPUT:25,
    // DASHBOARD_CARD_HEADER:25
}


/**
 * @summary Standard Icon and Style
 * @param {Object} IconObject
 * @param {STANDARD_ICONS_TYPE} IconObject.icon use standard value
 * @param {Object} IconObject.style
 * @param {String} IconObject.located
 * @param {String} IconObject.color
 * @param {Number} IconObject.size
 */
export const StandardIcon = ({icon,style={},size,color=ICON_COLORS.PRIMARY,located}) => {

    if(located) {
        color = ICON_COLORS[located]
        size = ICON_SIZE[located]
    }

    if(icon.file == FontAwesome) return (
        <Icon name={icon.name} size={size} color={color} style={style}/>
    )
    if(icon.file == Material) return (
        <MaterialIcon name={icon.name} size={size} color={color} style={style}/>
    )
    if(icon.file == Oct) return (
        <OctIcon name={icon.name} size={size} color={color} style={style}/>
    )
    if(icon.file == MaterialCommunity) return (
        <MaterialCommunityIcons name={icon.name} size={size} color={color} style={style}/>
    )
    if(icon.file == Foundation) return (
        <FoundationIcon name={icon.name} size={size} color={color} style={style}/>
    )
    if(icon.file == AntDesign) return (
        <AntDesignIcon name={icon.name} size={size} color={color} style={style}/>
    )
    if(icon.file == Ionic) return (
        <Ionicons name={icon.name} size={size} color={color} style={style}/>
    )
    if(icon.file == Feather) return (
        <Feather name={icon.name} size={size} color={color} style={style}/>
    )
    return <Icon5 name={icon.name} size={size} color={color} style={style}/>
}

StandardIcon.ICON = STANDARD_ICONS
StandardIcon.LOCATED = LOCATED
StandardIcon.SIZE = ICON_SIZE
StandardIcon.COLOR = ICON_COLORS