//Criando a bolinha do sinal (Componente bola)
let bola = {
	props:['cor'],
	template: `
		<div class="bola" v-bind:class="cor">
		
		</div>
	`
}

//Componente Global (sinal)
Vue.component('sinal', {
	props:['status'],
	components:{
		bola
	},
	template: `
		<div class="sinal">
			<template v-if="status == 'red'">
				<bola cor="red" />
				<bola />
				<bola />
			</template>
			<template v-else-if="status == 'yellow'">
				<bola />
				<bola cor="yellow" />
				<bola />
			</template>
			<template v-else-if="status == 'green'">
				<bola />
				<bola />
				<bola cor="green" />
			</template>
		</div>
	`
});

let app = new Vue({
	el:'#app',
	data:{
		sinalStatus:'red'
	},
	methods:{
		liberar:function(){
			this.sinalStatus = 'green';
		},
		fechar:function(){
			this.sinalStatus = 'yellow';

			setTimeout(this.fecharSinal, 2000);
		},
		fecharSinal:function(){
			this.sinalStatus = 'red';
		}
	}
});

