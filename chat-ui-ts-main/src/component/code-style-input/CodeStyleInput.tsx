import { Cascader } from 'antd';

const styleList=[
    'a11yDark',
    'a11yLight',
    'agate',
    'anOldHope',
    'androidstudio',
    'arduinoLight',
    'arta',
    'ascetic',
    'atelierCaveDark',
    'atelierCaveLight',
    'atelierDuneDark',
    'atelierDuneLight',
    'atelierEstuaryDark',
    'atelierEstuaryLight',
    'atelierForestDark',
    'atelierForestLight',
    'atelierHeathDark',
    'atelierHeathLight',
    'atelierLakesideDark',
    'atelierLakesideLight',
    'atelierPlateauDark',
    'atelierPlateauLight',
    'atelierSavannaDark',
    'atelierSavannaLight',
    'atelierSeasideDark',
    'atelierSeasideLight',
    'atelierSulphurpoolDark',
    'atelierSulphurpoolLight',
    'atomOneDarkReasonable',
    'atomOneDark',
    'atomOneLight',
    'brownPaper',
    'codepenEmbed',
    'colorBrewer',
    'darcula',
    'dark',
    'defaultStyle',
    'docco',
    'dracula',
    'far',
    'foundation',
    'githubGist',
    'github',
    'gml',
    'googlecode',
    'gradientDark',
    'gradientLight',
    'grayscale',
    'gruvboxDark',
    'gruvboxLight',
    'hopscotch',
    'hybrid',
    'idea',
    'irBlack',
    'isblEditorDark',
    'isblEditorLight',
    'kimbieDark',
    'kimbieLight',
    'lightfair',
    'lioshi',
    'magula',
    'monoBlue',
    'monokaiSublime',
    'monokai',
    'nightOwl',
    'nnfxDark',
    'nnfx',
    'nord',
    'obsidian',
    'ocean',
    'paraisoDark',
    'paraisoLight',
    'pojoaque',
    'purebasic',
    'qtcreatorDark',
    'qtcreatorLight',
    'railscasts',
    'rainbow',
    'routeros',
    'schoolBook',
    'shadesOfPurple',
    'solarizedDark',
    'solarizedLight',
    'srcery',
    'stackoverflowDark',
    'stackoverflowLight',
    'sunburst',
    'tomorrowNightBlue',
    'tomorrowNightBright',
    'tomorrowNightEighties',
    'tomorrowNight',
    'tomorrow',
    'vs2015',
    'vs',
    'xcode',
    'xt256',
    'zenburn'
  ]
const CodeStyleInput = (props:any)=>{

    let options:any = [
    ];

    styleList.forEach(item=>{
        options.push({value:item,label:item})
    })


    return <Cascader options={options} {...props} placeholder="Please select" />;
}

export default CodeStyleInput;