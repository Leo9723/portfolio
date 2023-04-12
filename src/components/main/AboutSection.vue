<script>
export default {

}
</script>

<template lang="">
    <div class="about d-flex align-items-center col-12 justify-content-evenly flex-column flex-md-row" id="about">
        <div class="desc col-4">
            <div class="title mb-4"> About Me.</div>
            Sono stato da sempre attratto dalla tecnologia, quindi ho deciso di intraprendere un percorso di studi pertinente approcciandomi in particolar modo alla programmazione. <br>
            Di pari passo all'avanzamento dei miei studi è cresciuta la mia passione e la mia curiosità verso questo settore in costante evoluzione. <br>
            Sento di rispecchiarmi nel mondo della programmazione per la sua dinamicità ed il suo cambiamento, che lo rendono unico e stimolante, non facendomi perdere la voglia di imparare sempre qualcosa di nuovo. 
        </div>
        <div class="image d-flex flex-column text-center py-5 py-md-0">
            <img src="../../../public/image.jpeg" alt="">
            <div class="name mt-4">
                Leonardo <br> Palazzetti
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
    .about{
        background-image: linear-gradient(black, rgb(15, 15, 15));
        color: white;
        padding: 10% 0px;
        .desc{
            font-weight: 600;
            .title{
                color: rgb(61, 24, 170);
                font-size: 50px;
                font-weight: 700;
    
            }
        }
        .image{
            img{
                width: 200px;
                aspect-ratio: 1 / 1;
                border-radius: 100%;
                border: 5px solid rgb(61, 24, 170);
            }
            .name{
                font-weight: 600;
                font-size: 30px;
                color: rgb(30, 168, 243);
            }
        }
    }
</style>