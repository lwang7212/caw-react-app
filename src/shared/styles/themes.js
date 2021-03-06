/**
 * 样式集中定义
 * @type {{name: string, primaryText: string, secondaryText: string, headerText: string, asideText: string, link: string, linkHover: string, editorCommandColor: string, topicText: string, preText: string, primaryBackground: string, secondaryBackground: string, editorBarBackground: string, editorBackground: string, drawerBackground: string, topicBackground: string, preBackground: string, alteringTableRowBackground: string, primaryFontFamily: string, drawerHeaderFontFamily: string, streamlineFontFamily: string, editorFont: string, primaryHeaderText: string, success: string, error: string, warning: string, auth: string, info: string, primaryButtonText: string, primaryButtonBackground: string, secondaryButtonText: string, secondaryButtonBorder: string, secondaryButtonBackground: string, secondaryButtonTextHover: string, secondaryButtonBorderHover: string, secondaryButtonBackgroundHover: string, formButtonBorder: string, formButtonBorderHover: string, formButtonBackgroundHover: string, editModeButtonText: string, frameBorder: string, inFrameBorder: string, topicBorder: string, frameSidebarBackground: string, frameTitlebarText: string}}
 */
export const base = {
    name: 'base',
    // Text colors
    primaryText: '#333',
    secondaryText: '#717172',
    headerText: '#333',
    asideText: '#666',
    link: '#428BCA',
    linkHover: '#5dade2',
    editorCommandColor: '#333',
    topicText: '#428BCA',
    preText: '#333',

    // Backgrounds
    primaryBackground: '#D2D5DA',
    secondaryBackground: '#fff',
    editorBarBackground: '#EFEFF4',
    editorBackground: '#fff',
    drawerBackground: '#30333a',
    topicBackground: '#f8f8f8',
    preBackground: '#f5f5f5',
    alteringTableRowBackground: '#f5f5f5',

    // Fonts
    primaryFontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    drawerHeaderFontFamily:
        "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    streamlineFontFamily: 'streamline',
    editorFont: '"Inconsolata", "Monaco", "Lucida Console", Courier, monospace;',

    // Headers
    primaryHeaderText: '#fff',

    // User feedback colors
    success: '#65B144',
    error: '#E74C3C',
    warning: '#FD952C',
    auth: '#428BCA',
    info: '#428BCA',

    // Buttons
    primaryButtonText: '#fff',
    primaryButtonBackground: '#008cc1',
    secondaryButtonText: '#717172',
    secondaryButtonBorder: '1px solid #717172',
    secondaryButtonBackground: 'transparent',
    secondaryButtonTextHover: '#fff',
    secondaryButtonBorderHover: '1px solid #717172',
    secondaryButtonBackgroundHover: '#717172',
    formButtonBorder: '1px solid #ccc',
    formButtonBorderHover: '1px solid ##adadad',
    formButtonBackgroundHover: '#e6e6e6',
    editModeButtonText: '#ffaf00',

    // Borders
    frameBorder: 'none',
    inFrameBorder: '1px solid #e6e9ef',
    topicBorder: '1px solid #dadada',

    // widgets
    frameSidebarBackground: '#F8F9FB',
    frameTitlebarText: '#717172'
}

export const normal = {
    ...base,
    name: 'normal'
}

export const outline = {
    ...base,
    name: 'outline',
    primaryText: '#000',
    secondaryText: '#000',
    frameBorder: '1px solid #000',
    inFrameBorder: '1px solid #000',
    topicBorder: '1px solid #000'
}

export const dark = {
    ...base,
    name: 'dark',

    primaryText: '#f4f4f4',
    secondaryText: '#eee',
    headerText: '#f4f4f4',
    primaryHeaderText: '#f4f4f4',
    editorCommandColor: '#1abc9c',
    link: '#f4f4f4',
    topicText: '#fff',
    preText: '#fff',

    // Backgrounds
    primaryBackground: '#282c32',
    secondaryBackground: '#5a6070',
    editorBarBackground: '#5a6070',
    editorBackground: '#282c32',
    drawerBackground: '#30333a',
    frameSidebarBackground: '#5a6070',
    topicBackground: 'transparent',
    preBackground: '#282c32',
    alteringTableRowBackground: '#282c32',

    // Buttons
    primaryButtonText: '#fff',
    primaryButtonBackground: '#008cc1',
    secondaryButtonText: '#f4f4f4',
    secondaryButtonBorder: '1px solid #717172',
    secondaryButtonBackground: 'transparent',
    secondaryButtonTextHover: '#f4f4f4',
    secondaryButtonBorderHover: '1px solid #717172',
    secondaryButtonBackgroundHover: '#282c32',

    // Borders
    inFrameBorder: '1px solid #f4f4f4'
}
