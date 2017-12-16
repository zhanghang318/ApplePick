import React, { Component } from 'react';
import AppList from './components/appleList'
import {connect} from 'react-redux'
import {donePick,beginPick,eateApple,AppleActionAll} from './action/action'
import './style/App.css'
class App extends Component {
    constructor(){
        super();
        this.pickApple = this.pickApple.bind(this)
        this.eatAppleClick = this.eatAppleClick.bind(this)
    }
    pickApple(){
        // let min = 200+Math.ceil(Math.random()*200)
        // this.props.dispatch(beginPick(true))
        // setTimeout(()=>{
        //     this.props.dispatch(beginPick(false))
        //     this.props.dispatch(donePick(min))
        // },2000)
        this.props.dispatch(AppleActionAll())
    }
    eatAppleClick(index){
         this.props.dispatch(eateApple(index))
    }
  render() {
      const {dispatch,isPick,appleList} = this.props
      let appleItems = appleList.appleList
      let eateApple=0,elseAppleWeight=0,eateLength=0
      let appleComponent =appleItems.map((item,index)=>{
          if(item.isEaten){
          eateLength = eateLength+1
          eateApple = eateApple+ item.weight
      } else {
          elseAppleWeight = elseAppleWeight+item.weight
      }
      return<AppList {...item} key={item.id} eatClick = {this.eatAppleClick} index={index}/>
      })
    return (
      <div className="App">
            <div className='appleBusket'>
                 <div className='main_box'>
                   <div className='box_title'>
                     <span>苹果篮子</span>
                   </div>
                   <div className='box_con'>
                        <div className='section current'>
                            <p>当前</p>
                             <p><span  className='number'>{appleComponent.length-eateLength}</span>个苹果，<span  className='number'>{elseAppleWeight}</span>克</p>
                        </div>
                      <div className='section past'>
                       <p>已吃掉</p>
                       <p><span  className='number'>{eateLength}</span>个苹果，<span  className='number'>{eateApple}</span>克</p>
                     </div>
                   </div>
                   <div className='appleList'>
                       {appleComponent}
                   </div>
                   <div className='btn_box'>
                     <button onClick={this.pickApple} className={isPick?"isPick":""}>{isPick?"采摘中...":"摘苹果"}</button>
                   </div>
                 </div>
            </div>
      </div>
    );
  }
}
function mapStateToProps(state){
    console.log(state)
    return {
        isPick:state.donePick,
        appleList:state.appleReducer
    }
}
export default connect(mapStateToProps)(App);
