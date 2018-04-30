import config from '../../config';
import React, { Component } from 'react';
import Edito from '../Edito/Edito';
import Element from '../Element/Element';
import StaticElement from '../StaticElement/StaticElement';
import Skew from '../Skew/Skew';
import Video from '../Video/Video';
import Masthead from '../Masthead/Masthead';
import './Board.css';
import './color.css';


function getSizes() {
    var width = Math.min(document.documentElement.clientWidth, config.ratio.width),
        height = Math.min(document.documentElement.clientHeight, config.ratio.height),
        slideWidth = width,
        boardHeight = height,
        boardTop = 0;

    if (width / height < config.ratio.width / config.ratio.height) {
        boardHeight = config.ratio.height * width / config.ratio.width;
        boardTop = (document.documentElement.clientHeight - boardHeight) / 2;
	}

    return {
        slideWidth: slideWidth,
        boardHeight: boardHeight,
        boardTop: boardTop
    }
}

export default class Board extends Component {

    constructor(props) {
        super(props);

        this.state = {
            slideWidth:getSizes().slideWidth,
            boardHeight:getSizes().boardHeight,
            boardTop:getSizes().boardTop
        };
    }

    componentDidMount() {
        var _this = this;
        window.addEventListener('resize', function () {
            _this.setState({
                slideWidth:getSizes().slideWidth,
                boardHeight:getSizes().boardHeight,
                boardTop:getSizes().boardTop
            });
        });
    }

    render() {

        return (
            <div id="board" className="Board" style={{marginTop:this.state.boardTop, left:0,  minWidth:this.state.slideWidth, height: this.state.boardHeight}}>
                
                
                {/* CHAP 0 - Introduction }

                <div className="Board__slide white_blue Board__slide--top">
                    <Element name="FOND2.png" index="p2" positionLeft="-10%"  ></Element> 
                </div>
                <div className="Board__slide white_blue Board__slide--top">
                    <Edito content={this.props.datas.text[0].zone_1} positionTop="15%"></Edito> 
                </div>
                 <div className="Board__slide white_blue">
                    <Element name="CHAP00-PHOTO1B.png" index="p1" positionLeft="5%"></Element> 
                    <Element name="CHAP00-PHOTO1.png" index="p2" positionLeft="0%"></Element>
                </div> 
                <div className="Board__slide white_blue Board__slide--top">
                    <Edito content={this.props.datas.text[0].zone_2} positionTop="20%"></Edito>
                    <Element name="FOND12.png" positionLeft="40%" changeMargin={true} ></Element>      
                </div>
                <div className="Board__slide white_blue Board__slide--middle">
                    <Element name="FOND4.png" index="m2" positionLeft="-80%"></Element>
                    <Element name="AP-CHAP00-CITATION1.png" index="p1" positionLeft="8%" changeMargin={true}></Element>
                    <Element name="CHAP00-CITATION1.png" index="p1" positionLeft="-2%" changeMargin={true}></Element>        
                </div> 
                <div className="Board__slide white_blue Board__slide--top">
                    <Element name="FOND11bis.png" positionLeft="-80%"></Element>  
                    <Edito content={this.props.datas.text[0].zone_3} positionTop="29%"></Edito>
                </div>
                <div className="Board__slide white_blue Board__slide--top js-board-doubleslide " > 
                    <Element name="FOND22.png" positionLeft="35%"></Element>
                    <Element name="CHAP00-CITATION2.png"  index="p1" positionLeft="-3%" changeMargin={true} ></Element> 
                </div>   

                {/* CHAP 1 }
                <div className="Board__slide white_blue">
                    <Skew position="left" name="Chap1 cover2.png" bg="Chap1 cover2.png" change={true} ></Skew>
                </div>
                <div className="Board__slide white_blue">
              
                </div>

                <div className="Board__slide Board__slide--bottom white_blue">
                    <Edito content={this.props.datas.text[1].zone_1} positionBottom="8%"></Edito> 
                    <Element name="FOND17-TELEPHONE.png" positionLeft="-10%" index="p1"></Element>   
                    
                </div>
                <div className="Board__slide  Board__slide--top white_blue">
                    <Edito content={this.props.datas.text[1].zone_2}  positionTop="37%"></Edito>
                    <Element name="FOND13bottomcuatro.png" positionLeft="-45%" index="m1"></Element>
                    <Element name="FOND13.bottomtwo.png" positionLeft="5%" index="p1"></Element>
                </div>
                <div className="Board__slide Board__slide--bottom white_blue">     
                    <Element name="FOND21-LOUPE1.png" positionLeft="-18%" changeMargin={true}></Element>
                </div>
                <div className="Board__slide Board__slide--bottom white_blue">
                     <Element name="AP-CHAP01-CITATIONANAIS.png"  ></Element> 
                     <Element name="CHAP01-CITATION1v2.png" positionLeft="-2%"></Element>
                </div>
                <div className="Board__slide Board__slide--top white_blue ">
                    <Element name="FOND22-LOUPE2.png" positionLeft="-35%" index="p1"></Element>
                    <Element name="FOND10.png" positionLeft="-50%" ></Element>
                </div> 
                <div className="Board__slide Board__slide--middle white_blue">
                    <Edito content={this.props.datas.text[1].zone_4}></Edito>
                </div>
                <div className="Board__slide white_blue">
                    <Video id="k7hbaqsPXNZv6HqxEZY" maxHeight="800" ratio="0.561"></Video>
                    <Element name="FOND13bis.png" positionLeft="-75%"  ></Element>
                </div>  
                <div className="Board__slide Board__slide--top white_blue">
                    <Edito content={this.props.datas.text[1].zone_5} positionTop="13%"></Edito>
                    <Element name="Chap1 cita1.png" index="m1" positionLeft="0%"></Element> 
                    <Element name="FOND1.png" index="m1" positionLeft="20%" ></Element> 
                </div> 
                <div className="Board__slide Board__slide--top white_blue">
                    <Element name="FOND5.png" positionLeft="3%" index="m2"></Element>
                    <Edito content={this.props.datas.text[1].zone_6} positionTop="20%"></Edito>
                </div>
                <div className="Board__slide Board__slide--top white_blue"> 
                    <Edito content={this.props.datas.text[1].zone_7} positionTop="10%"></Edito>
                </div>
                <div className="Board__slide white_blue">
                    <Element name="CHAP01-PHOTO1A.png" index="p1" positionLeft="0%"></Element> 
                    <Element name="CHAP01-PHOTO1B.png" index="p2" positionLeft="12%"></Element>
                </div> 
                <div className="Board__slide Board__slide--top white_blue"> 
                    <Edito content={this.props.datas.text[1].zone_8}  positionTop="20%"></Edito>
                </div>
                <div className="Board__slide Board__slide--bottom white_blue"> 
                    <Element name="AP-CHAP01-CITATION3.png" index="p1" positionLeft="-20%"></Element>
                    <Element name="CHAP01-CITATION3.png" index="p1" positionLeft="-5%"></Element>
                    <Element name="FOND11bis.png" positionLeft="-20%"></Element>
                </div>  
                <div className="Board__slide Board__slide--top white_blue"> 
                    <Edito content={this.props.datas.text[1].zone_9}  positionTop="20%"></Edito>
                </div>
                <div className="Board__slide Board__slide--middle white_blue">
                    <Element name="CHAP1-INFOGRAPHIE-JOUEURS.png" ></Element> 
                </div>
                <div className="Board__slide Board__slide--top white_blue"> 
                    <Edito content={this.props.datas.text[1].zone_10}  positionTop="20%"></Edito>
                </div>
                <div className="Board__slide Board__slide--top white_blue"> 
                    <Edito content={this.props.datas.text[1].zone_11}  positionTop="40%"></Edito>
                </div>
                <div className="Board__slide Board__slide--top white_blue"> 
                    <Edito content={this.props.datas.text[1].zone_12}  positionTop="10%"></Edito>
                    <Element name="Chap1 cita2.png" index="p1" positionLeft="-5%"></Element>
                </div>
                <div className="Board__slide Board__slide--top white_blue"> 
                    <Edito content={this.props.datas.text[1].zone_13}  positionTop="10%"></Edito>
                </div>
                <div className="Board__slide Board__slide--top white_blue"> 
                    <Edito content={this.props.datas.text[1].zone_14}  positionTop="60%"></Edito>
                </div>
                <div className="Board__slide Board__slide--top white_blue"> 
                    <Edito content={this.props.datas.text[1].zone_15}  positionTop="20%"></Edito>
                </div>
                <div className="Board__slide Board__slide--top white_blue"> 
                    <Edito content={this.props.datas.text[1].zone_16}  positionTop="20%"></Edito>
                </div>
                 
                {/* CHAP 2 }

                <div className="Board__slide white_blue">
                    <Skew position="left" name="Chap2 cover.png" bg="Chap2 cover.png"></Skew>
                </div>
                <div className="Board__slide Board__slide--middle red white">
                </div>
                <div className="Board__slide Board__slide--bottom red white">
                    <Element name="FOND6.png" index="m1" ></Element>
                    <Edito content={this.props.datas.text[2].zone_1} positionBottom="13%"></Edito>
                </div>
                <div className="Board__slide Board__slide--middle red white">
                    <Element name="CHAP02-PHOTO1.png" positionLeft="-9%"></Element>
                </div>
                <div className="Board__slide Board__slide--top red white">
                    <Element name="FOND8terinv.png" index="m1" positionLeft="-77%"></Element>
                    <Edito content={this.props.datas.text[2].zone_2} positionTop="20%"></Edito>
                </div>
                <div className="Board__slide Board__slide--bottom red white">
                    <Element name="CHAP02-PHOTO2.png" index="p2" positionLeft="0%"></Element>
                    <Element name="FOND14inv.png" positionLeft="-25%"></Element>
                </div>
                <div className="Board__slide Board__slide--bottom red white">
                    <Element name="FOND20.png" positionLeft="-25%" index="p1"></Element>
                    <Edito content={this.props.datas.text[2].zone_3} positionBottom="10%"></Edito>
                </div>
                <div className="Board__slide Board__slide--bottom red white">
                    <Edito content={this.props.datas.text[2].zone_4} positionBottom="15%"></Edito>
                </div>
                <div className="Board__slide Board__slide--bottom red white">
                    <Element name="AP-Chap2 cita1.png" index="p1" positionLeft="11%"></Element>
                    <Element name="Chap2 cita1.png" index="p1" positionLeft="0%"></Element>
                </div>
                <div className="Board__slide red">
                    <Video id="k72yQ69cDu3fzaqCpC0" maxHeight="800" ratio="0.561"></Video>
                </div> 
                <div className="Board__slide Board__slide--bottom red white">
                    <Edito content={this.props.datas.text[2].zone_5}  positionBottom="28%"></Edito>
                    <Element name="FOND13bottomter.png" positionLeft="-80%" index="p1"></Element>
                    <Element name="FOND13bottomcuatro.png" positionLeft="-55%" index="m1"></Element>
                </div>
                <div className="Board__slide Board__slide--bottom red white">
                    <Element name="CHAP02-INFOGRAPHIE1-PALMARES.png" positionLeft="-2%"></Element>
                    <Element name="FOND13bottom.png" positionLeft="55%" index="m1"></Element>
                </div>
                <div className="Board__slide Board__slide--top red white">
                    <Edito content={this.props.datas.text[2].zone_6} positionTop="20%"></Edito>
                 </div>
                 <div className="Board__slide Board__slide--bottom red white">
                    <Element name="FOND12.png" positionLeft="0%" index="m1"></Element>
                    <Edito content={this.props.datas.text[2].zone_7} positionBottom="25%"></Edito>
                 </div>
                <div className="Board__slide Board__slide--bottom red white">
                    <Element name="CHAP02-INFOGRAPHIE2-EXCLUSION.png"></Element>
                </div>
                <div className="Board__slide Board__slide--top red white">
                    <Edito content={this.props.datas.text[2].zone_8}  positionTop="27%"></Edito>
                    <Element name="FOND18-ANNEAUXJO.png" positionLeft="-5%" index="m1"></Element>
                </div>
                <div className="Board__slide Board__slide--bottom red white">
                    <Element name="AP-Chap2 cita2.png" index="p1" positionLeft="11%"></Element>
                    <Element name="Chap2 cita2.png" index="p1" positionLeft="0%"></Element>
                </div>
                <div className="Board__slide Board__slide--top red white">
                    <Edito content={this.props.datas.text[2].zone_9} positionTop="20%"></Edito>
                 </div>
                 <div className="Board__slide Board__slide--top red white">
                    <Edito content={this.props.datas.text[2].zone_10} positionTop="30%"></Edito>
                 </div>
                 <div className="Board__slide Board__slide--top red white">
                    <Edito content={this.props.datas.text[2].zone_10bis} positionTop="55%"></Edito>
                    <Element name="Chap2 cita3.png" index="p1" positionLeft="0%"></Element>
                 </div>
                 <div className="Board__slide Board__slide--top red white">
                    <Edito content={this.props.datas.text[2].zone_11} positionTop="12%"></Edito>
                 </div>
                 <div className="Board__slide Board__slide--top red white">
                    <Edito content={this.props.datas.text[2].zone_12} positionTop="29%"></Edito>
                 </div>
                 <div className="Board__slide Board__slide--top red white">
                    <Edito content={this.props.datas.text[2].zone_13} positionTop="20%"></Edito>
                 </div>
                 <div className="Board__slide Board__slide--top red white">
                    <Edito content={this.props.datas.text[2].zone_14} positionTop="32%"></Edito>
                 </div>
                 <div className="Board__slide Board__slide--bottom red white">
                    <Element name="AP-Chap2 cita4.png" index="p1" positionLeft="11%"></Element>
                    <Element name="Chap2 cita4.png" index="p1" positionLeft="0%"></Element>
                </div>
                 <div className="Board__slide Board__slide--top red white">
                    <Edito content={this.props.datas.text[2].zone_15} positionTop="18%"></Edito>
                 </div>
                 <div className="Board__slide Board__slide--top red white">
                    <Edito content={this.props.datas.text[2].zone_16} positionTop="20%"></Edito>
                 </div>
                
                
                {/* CHAP 3 */}

                <div className="Board__slide red">
                    <Skew position="left" name="Chap3 cover.png" bg="Chap3 cover.png"></Skew>
                </div>
                <div className="Board__slide white_blue"></div>
                <div className="Board__slide Board__slide--top white_blue">
                    <Element name="FOND14invnew.png" positionLeft="15%" index="m2"></Element>
                    <Edito content={this.props.datas.text[3].zone_1} positionTop="40%"></Edito>
                </div>
                <div className="Board__slide Board__slide--top white_blue">
                    <Edito content={this.props.datas.text[3].zone_2} positionTop="30%"></Edito>
                </div> 
                <div className="Board__slide white_blue">
                    <StaticElement bg="AP-CHAP03-PHOTO.png" name="CHAP03-PHOTO.png" size="simple"></StaticElement>
                </div>
                <div className="Board__slide Board__slide--top white_blue">
                <   Element name="FOND5.png" positionLeft="50%" index="m2"></Element>
                    <Edito content={this.props.datas.text[3].zone_3} positionTop="35%"></Edito>
                </div>
                <div className="Board__slide Board__slide--top white_blue">
                    <Element name="CHAP03-GIFPODIUM.gif"></Element>
                </div>
                <div className="Board__slide Board__slide--top white_blue">
                    <Edito content={this.props.datas.text[3].zone_4} positionTop="12%"></Edito>
                </div>
                <div className="Board__slide Board__slide--top white_blue">
                    <Edito content={this.props.datas.text[3].zone_5} positionTop="30%"></Edito>
                </div>
                <div className="Board__slide Board__slide--bottom white_blue">
                    <Edito content={this.props.datas.text[3].zone_7} positionBottom="25%"></Edito>
                    <Edito content={this.props.datas.text[3].zone_7} positionTop="30%"></Edito>
                    <Element name="FOND9.png" positionLeft="15%" index="p1" changeMargin={true} ></Element>
                </div>
                <div className="Board__slide Board__slide--bottom white_blue">
                    <Edito content={this.props.datas.text[3].zone_8} positionBottom="20%"></Edito>
                </div>
                 <div className="Board__slide white_blue">
                    <Video id="k6nQH9clutLjhlqxEZX" maxHeight="800" ratio="0.561"></Video>
                </div>
                <div className="Board__slide Board__slide--bottom white_blue">
                    <Edito content={this.props.datas.text[3].zone_9} positionBottom="10%"></Edito>
                </div>
                <div className="Board__slide Board__slide--bottom white_blue">
                    <Edito content={this.props.datas.text[3].zone_10} positionBottom="30%"></Edito>
                </div>
                <div className="Board__slide Board__slide--bottom white_blue">
                    <Edito content={this.props.datas.text[3].zone_11} positionBottom="10%"></Edito>
                    <Edito content={this.props.datas.text[3].zone_11bis} positionBottom="40%"></Edito>
                </div>
                <div className="Board__slide Board__slide--bottom white_blue">
                    <Edito content={this.props.datas.text[3].zone_12} positionBottom="20%"></Edito>
                </div>
                <div className="Board__slide Board__slide--bottom white_blue">
                    <Edito content={this.props.datas.text[3].zone_13} positionBottom="20%"></Edito>
                </div>
                <div className="Board__slide Board__slide--bottom white_blue">
                    <Edito content={this.props.datas.text[3].zone_14} positionBottom="20%"></Edito>
                    <Edito content={this.props.datas.text[3].zone_11bis} positionBottom="40%"></Edito>
                </div>
                <div className="Board__slide Board__slide--bottom white_blue">
                    <Edito content={this.props.datas.text[3].zone_15} positionBottom="20%"></Edito>
                </div>
                <div className="Board__slide Board__slide--bottom white_blue">
                    <Edito content={this.props.datas.text[3].zone_16} positionBottom="20%"></Edito>
                </div>
                <div className="Board__slide Board__slide--bottom white_blue">
                    <Edito content={this.props.datas.text[3].zone_17} positionBottom="20%"></Edito>
                </div>
                <div className="Board__slide Board__slide--bottom white_blue">
                    <Edito content={this.props.datas.text[3].zone_18} positionBottom="20%"></Edito>
                </div>
                <div className="Board__slide Board__slide--bottom white_blue">
                    <Edito content={this.props.datas.text[3].zone_19} positionBottom="20%"></Edito>
                </div>
                <div className="Board__slide Board__slide--bottom white_blue">
                    <Edito content={this.props.datas.text[3].zone_20} positionBottom="20%"></Edito>
                </div>
                <div className="Board__slide Board__slide--bottom white_blue">
                    <Edito content={this.props.datas.text[3].zone_21} positionBottom="20%"></Edito>
                </div>
                <div className="Board__slide Board__slide--bottom white_blue">
                    <Edito content={this.props.datas.text[3].zone_22} positionBottom="20%"></Edito>
                </div>
                <div className="Board__slide Board__slide--bottom white_blue">
                    <Edito content={this.props.datas.text[3].zone_23} positionBottom="20%"></Edito>
                </div>
                <div className="Board__slide Board__slide--bottom white_blue">
                    <Edito content={this.props.datas.text[3].zone_24} positionBottom="20%"></Edito>
                </div>
                <div className="Board__slide Board__slide--bottom white_blue">
                    <Edito content={this.props.datas.text[3].zone_25} positionBottom="20%"></Edito>
                </div>
         
                {/* CHAP04 - Conclusion */}

                <div className="Board__slide white_blue">
                    <Skew position="left" name="CHAP04-TITRE.png" bg="CHAP04-OUVERTURE.png"></Skew>
                </div>
                <div className="Board__slide only_blue"></div>
                <div className="Board__slide Board__slide--top white only_blue">
                    <Edito content={this.props.datas.text[4].zone_1} positionTop="11%"></Edito>
                    <Element name="FOND19-CHALET.png" positionLeft="-5%"></Element>
                </div>
                <div className="Board__slide Board__slide--middle only_blue">
                    <Element name="CHAP04-PHOTO1.png" index="p1" positionLeft="-1%"></Element>
                    <Element name="CHAP04-PHOTO1A.png" index="p2" positionLeft="-1%"></Element>         
                </div>
                <div className="Board__slide Board__slide--bottom only_blue">
                    <Element name="AP-CHAP04-CITATION1.png"  positionLeft="-3%"></Element>
                    <Element name="CHAP04-CITATION1.png" positionLeft="0%"></Element>  
                </div>     
                <div className="Board__slide Board__slide--top white only_blue">
                    <Element name="FOND21.png" index="m1" positionLeft="-20%"></Element>
                    <Edito content={this.props.datas.text[4].zone_2} positionTop="20%"></Edito>
                </div>
                <div className="Board__slide Board__slide--top white only_blue">
                    <Element name="FOND16-ALLIANCESINV.png" positionLeft="-30%" changeMargin={true} ></Element>  
                    <Edito content={this.props.datas.text[4].zone_3} positionTop="17%"></Edito>
                </div>
                <div className="Board__slide white_blue">
                    <StaticElement bg="AP-CHAP04-CITATIONGERD.png" name="CHAP04-CITATION2.png" size="simple"></StaticElement>
                </div>
                <div className="Board__slide Board__slide--bottom only_blue white">
                    <Element name="FOND12.png" index="m1" positionLeft="-10%"></Element>
                    <Edito content={this.props.datas.text[4].zone_4} positionBottom="15%"></Edito>
                </div>
                <div className="Board__slide Board__slide--bottom only_blue white">
                    <Element name="FOND20-FIN.png" index="p1" positionLeft="-76%" ></Element>
                    <Element name="CHAP04-PHOTO2.png" index="p1" positionLeft="0%"></Element>
                </div> 
                <div className="Board__slide Board__slide--top only_blue white">
                    <Edito content={this.props.datas.text[4].zone_5} positionTop="15%"></Edito>
                    <Element name="FOND23-medaille.png" positionLeft="55%" index="p1" changeMargin={true} ></Element>  
                </div>
                <div className="Board__slide only_blue">
                    <Skew position="left" bg="OURS.png" ></Skew>
                </div>
                <div className="Board__slide only_blue black">
                    <Masthead />
                </div>
            </div>
        )
    }
}
