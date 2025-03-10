//function factory
function CriaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            console.log('iniciei');
            this.cliqueBotoes();
            this.PressionaEnter();
        },

        BtnParaDisplay(texto) {
            this.display.value += texto;
        },

        ClearDisplay() {
            this.display.value = "";
        },

        DellDisplay() {
            this.display.value = this.display.value.slice(0, -1);
        },

        PressionaEnter(){
            this.display.addEventListener('keyup', e =>{
                if(e.keyCode === 13){
                    this.RealizaConta();
                }
            }); 
        },

        RealizaConta() {
            try {
                let linhaConta = this.display.value;
                for (let letra of linhaConta) {
                    if (['+', '-', '*', '/', '.', '(', ')']) {
                        continue; //verifica se o caractere nn é um dos operadores
                    }

                    letra = Number.parseFloat(letra);
                    if (Number.isNaN(letra)) throw 'erro';
                }
                linhaConta = eval(linhaConta);
                if (!linhaConta) throw 'erro';

                this.display.value = String(linhaConta);
            }
            catch (e) {
                alert('Conta Inválida');
                return;

            }
        },
        
        cliqueBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.BtnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) this.ClearDisplay();

                if (el.classList.contains('btn-dell')) this.DellDisplay();

                if (el.classList.contains('btn-eq')) this.RealizaConta();

            });
        },

    }
};
const calculadora = CriaCalculadora();
calculadora.inicia();
