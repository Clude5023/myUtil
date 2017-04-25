class ClickScale{
	constructor(options,x,y,time){ //param node,xscale,yscale
		let defalutOptions = {
			element:'',
			x:0.85,
			y:0.85,
			time:0.5,
		}
		this.options = Object.assign({},defalutOptions,options)
		this.checkOptions().bindEvent()
	}
	checkOptions(){
		if (!this.options.element){
			throw new Error('element is required')
		}
		return this
	}
	bindEvent(){
		this.options.element.addEventListener('mousedown',(e)=>{
			if (e.button ===0){
				e.target.style.transform = `scale(${this.options.x},${this.options.y})`
				e.target.style.transition = `transform ${this.options.time}s`
			}
		},false)
		this.options.element.addEventListener('mouseup',(e)=>{
			e.target.style.transform = `scale(1,1)`
			e.target.style.transition = `transform ${this.options.time}s`
		},false)
	}
}