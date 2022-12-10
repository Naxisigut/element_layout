/* eslint-disable */
import Vue from "vue";
import { Dialog } from "element-ui";
let instance

function Modal(content, config){
    const dom = document.createElement('div')
    document.body.appendChild(dom)
    instance = new Vue({
        el: dom,
        components:{
            DialogContent:content
        },
        render(h){
            const DialogContent = h('DialogContent')
            const scopedSlots = {
                default: ()=> DialogContent
            }
            return(
                <Dialog {...{props: config}} visible={this.visible} v-on:close={this.close} scopedSlots={scopedSlots} >
                </Dialog>
            )
            
        },
        data(){
            return {
                visible: true
            }
        },
        methods: {
            close(){
                this.visible = false
            }
        }
    })
}

export default Modal