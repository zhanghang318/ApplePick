# ApplePick
摘苹果（里面的异步action，没有使用请求api，采用一个setTimeout演示操作）
2017-12-16    使用react+redux开发的一个小demo，里面也用到了redux-thunk 中间件来操作异步action。

虽然在这个小案例中，体现的中间件的作用比较小，但是在以后的一些大项目中，完全是必不可少的，期间也遇到很多问题：


1、  比如：在 引入 redux-thunk的时候，没有了解applyMiddleware内部实现。

            import {createStore,applyMiddleware} from 'redux'
            import thunk from 'redux-thunk'
            import  rootRedux from '../reducer/index'
              const store = createStore(
                  rootRedux,
                  applyMiddleware(thunk)   //  这里的 位置一定要放对，不然报错，纠结好半天
              )
              
2、 还有一个问题是 ，自己但是也没看文档，直接在action中  操作dispacth，结果也是报错，

                  export function AppleActionAll  (){
                      return (dispatch,getState)=>{   //  这里返回的是一个函数，成为thunk ，然后被Redux Thunk middleware 执行
                          const {bool}  = getState()
                          if(bool){
                              return null;
                          }
                          dispatch (beginPick(true))
                          let min = 200+Math.ceil(Math.random()*200)
                          setTimeout(()=>{
                              dispatch (donePick(min))
                              dispatch (beginPick(false))
                          },2000)
                      }
                  }
                  
                  
                  
                  自己遇到的问题很ruozhi，毕竟刚接触了react。
