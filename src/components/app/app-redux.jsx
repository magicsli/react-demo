import React, { Component } from 'react'

// 这次普通的原生方法

// export default class AppRedux extends Component {

//     state = {
//         number:0
//     }

//     add = ()=>{
//         // 获取number值
//         const {number} = this.state;
//         //获取选择下拉框的值
//         const count = this.sel.value * 1;
//         // 改变状态
//         this.setState({number:number + count})
//     }
//     subtract = ()=>{
//         // 获取number值
//         const { number } = this.state;
//         //获取选择下拉框的值
//         const count = this.sel.value * 1;
//         // 改变状态
//         this.setState({ number: number - count })
//     }
//     evenAdd = () => {
//         // 获取number值
//         const { number } = this.state;
//         //获取选择下拉框的值
//         const count = this.sel.value * 1;
//         if(count % 2 === 0){
//               // 改变状态
//             this.setState({ number: number + count })
//         }

//     }

//     asyncAdd = () => {
//         // 获取number值
//         const { number } = this.state;
//         //获取选择下拉框的值
//         const count = this.sel.value * 1;

//         setTimeout(() => {
//             this.setState({ number: number + count })
//         }, 1000);
//             // 改变状态
//     }


//   render() {
//     return (
//       <div>
//           <h3>现在的数据是: <span>{this.state.number}</span></h3>
//             <select ref={sel => this.sel = sel} name="" id="">
//                 <option value="1" selected>1</option>
//                 <option value="2">2</option>
//                 <option value="3">3</option>
//                 <option value="4">4</option>
//             </select>
//             <button onClick={this.add}>+</button>
//             <button onClick={this.subtract} >-</button>
//             <button onClick={this.evenAdd}>是偶数才加</button>
//             <button onClick={this.asyncAdd}>隔一秒后加</button>
//       </div>
//     )
//   }
// }

import { INCREMENT, DECREMENT} from '../../redux/action-types'
// 让我们用 redux试试
export default class AppRedux extends Component {

    state = {
        number: 0
    }

    add = () => {
        // 获取number值
        // -- 在rendux中,由于我们将状态寄托给了store对象进行管理,我们不需要进行操作判断
        //获取选择下拉框的值
        const count = this.sel.value * 1;
        // 改变状态
        this.props.store.dispatch({ type: INCREMENT , data:count})
    }
    subtract = () => {
        // 获取number值
        // -- 在rendux中,由于我们将状态寄托给了store对象进行管理,我们不需要进行操作判断
        //获取选择下拉框的值
        const count = this.sel.value * 1;
        console.log(this.props.store)
        // 改变状态
        this.props.store.dispatch({ type: DECREMENT, data:count })
    }
    evenAdd = () => {
        // 获取number值
        // -- 在rendux中,由于我们将状态寄托给了store对象进行管理,我们不需要进行操作判断
        //获取选择下拉框的值
        const count = this.sel.value * 1;
        if (count % 2 === 0) {
            // 改变状态
            this.props.store.dispatch({ type: INCREMENT , data:count})
        }

    }

    asyncAdd = () => {
        // 获取number值
        // -- 在rendux中,由于我们将状态寄托给了store对象进行管理,我们不需要进行操作判断
        //获取选择下拉框的值
        const count = this.sel.value * 1;

        setTimeout(() => {
            this.props.store.dispatch({ type: INCREMENT , data:count})
        }, 1000);
        // 改变状态
    }


    render() {
        return (
            <div>
                <h3>现在的数据是: <span>{this.props.store.getState()}</span></h3>
                <select ref={sel => this.sel = sel} defaultValue="2" name="" id="">
                    <option defaultValue="1">1</option>
                    <option defaultValue="2">2</option>
                    <option defaultValue="3" >3</option>
                    <option defaultValue="4">4</option>
                </select>
                <button onClick={this.add}>+</button>
                <button onClick={this.subtract} >-</button>
                <button onClick={this.evenAdd}>是偶数才加</button>
                <button onClick={this.asyncAdd}>隔一秒后加</button>
            </div>
        )
    }
}
