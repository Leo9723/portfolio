<script>
export default {
    
}
</script>

<template lang="">
    <div class="contact d-flex justify-content-evenly py-5 flex-column-reverse flex-md-row" id="contact">
        <div class="left">
            <div class="title">
                I'M HERE.
            </div>
            <iframe class="map" id="gmap_canvas" src="https://maps.google.com/maps?q=Empoli&amp;t=&amp;z=5&amp;ie=UTF8&amp;iwloc=&amp;output=embed" scrolling="no" marginheight="0" marginwidth="0" frameborder="0"></iframe>
        </div>
        <div class="center d-none d-md-block">

        </div>
        <div class="right">
            <div class="title">
                CONTACT ME.
            </div>
            <div class="footer-item">
                <a href="mailto:palazzettileonardo97@gmail.com">Interested?</a> <span class="show">Write me!</span>
            </div>
            <div class="footer-item">
                <a href="https://github.com/Leo9723">GitHub</a> <span class="show">@Leo9723</span>
            </div>
            <div class="footer-item">
                <a href="https://www.linkedin.com/in/leonardo-palazzetti-8b7234233/">Linkedin</a> <span class="show">/leonardo-palazzetti</span>
            </div>
            <div class="footer-item">
                <a href="/Leonardo-Palazzetti-CV.pdf" download>My CV</a> <span class="show">Download it!</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.map{
    height: 300px;
    width: 400px;
}
.contact{
    background-image: linear-gradient(rgb(30, 30, 30), rgb(33, 33, 33));
    .right .title{
        color: violet;
    }
    .left .title{
        color: rgb(37, 37, 202);
    }
    .title{
        font-size: 50px;
        font-weight: 700;
    }
    .center{
        border: 5px solid rgb(61, 24, 170);
    }

    .footer-item{
        border-bottom: 1px solid grey;
        width: 100%;
        padding: 10px;
        a{
            text-decoration: none;
            color: white;
            font-weight: bold;
            font-size: x-large;
        }
    }
}

.show{
    color: white;
    opacity: 0;
    position: relative;
    left: 30px;
    font-size: large;
    padding: 0px 10px;
    font-weight: bold;
    color: rgb(91, 161, 227);
    transition: all 0.5s;
}
.footer-item:hover .show{
    opacity: 1;
    left: 0px;
}
    
</style>