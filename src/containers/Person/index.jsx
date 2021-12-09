//第一编写ui组件,不暴露，留为本地父组件使用
import React, { Component } from 'react'
//我们需要导入connect用于父子组件的连接
import { connect } from 'react-redux'
//我们可以安装nanoid用于生成唯一的id
import { nanoid } from 'nanoid'
//导入action里面我们所需要的action
import { addPerson1 } from '../../redux/actions/person'

class Son extends Component {
    addPerson = ()=> {
        const name = this.nameNode.value
        const age = this.ageNode.value*1
        const people = {id:nanoid(),name,age}
        this.props.add(people)
        this.nameNode.value = ""
        this.ageNode.value = ""
    }
    render() {
        return (
            <div>
                <h2>我是person组件</h2>
                <input placeholder="输入姓名" ref={c => this.nameNode = c}/>
                <input placeholder="输入年龄" ref={c => this.ageNode = c}/>
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.persons.map((p) => {
                            return <li key={p.id}>姓名是：{p.name}--年龄是：{p.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
//映射状态,从store传到父组件，然后通过props传到子组件
const mapStateToProps = (state) => {
    console.log("父组件里面的状态=============>"+state.person)
    return {persons:state.person}
}
//映射改变状态的方法,对没错就是这样
const mapDispatchToProps = (dispatch) => {
    console.log("父组件里面改变状态的方法======>")
    return {add:(person) => {dispatch(addPerson1(person))}}
}
export default connect(mapStateToProps,mapDispatchToProps)(Son)
