<template>
  <footer>
    <div class="footer-content">
      <p class="head">Find us on</p>
      <ul class="social">
        <li><a href="#" class="facebook" target="_blank" title="Facebook"><i class="fa fa-facebook"></i></a>
        </li>
        <li><a href="#" class="twitter" target="_blank" title="Twitter"><i class="fa fa-twitter"></i></a>
        </li>
        <li><a href="#" class="instagram" target="_blank" title="Instagram"><i class="fa fa-instagram"></i></a>
        </li>
      </ul>
      <p class="copy">&copy; 2021</p>
    </div>
  </footer>
</template>
<style>
.fa-facebook::before {
  content: url("https://lh3.googleusercontent.com/-VPr8buUo47w/VjMsRPIzr-I/AAAAAAAAAL4/AYBtvlNCQiw/s64-Ic42/clouds_social_media_icons_set_64x64_0000_facebook.png");
}
.fa-twitter::before {
  content: url("https://lh3.googleusercontent.com/-yDH1FuHcQ5s/VjMsQ2lXvxI/AAAAAAAAAMg/i8JHsTh6aU8/s64-Ic42/clouds_social_media_icons_set_64x64_0002_twitter.png");
}
.fa-instagram::before {
  content: url("https://lh3.googleusercontent.com/-VIveL13ocQc/VjMw7JU6dGI/AAAAAAAAAOo/AGxBey6rtC0/s64-Ic42/clouds_social_media_icons_set_64x64_0001_instagram.png")
}
footer{
  overflow: hidden;
  bottom: 50px;
  left: 4%;
  background: whitesmoke;
  clear:both;
  position: relative;
  height: 210px;
  width: 90%;
  margin-top: 200px;
  align-items: center;
  color: whitesmoke;
}
.footer-content{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

.head{
  margin-top: 2.5%;
  max-width: 500px;
  line-height: 30px;
  font-size: 30px;
  color: dimgray;
}
.social{
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.social li{
  margin: 0 15px;
}
.copy{
  margin-bottom: 50%;
  max-width: 450px;
  line-height: 10px;
  font-size: 17px;
  color: dimgray;
}
</style>
