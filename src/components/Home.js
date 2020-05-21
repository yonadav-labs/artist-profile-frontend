import React, {Component} from "react";
import axios from 'axios'
import Parser from 'html-react-parser';
import { Checkbox } from 'pretty-checkbox';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import alertify from 'alertifyjs';
import { Parallax } from 'react-scroll-parallax';
import $ from 'jquery'
import Artworks from "./Artworks";
import Artist from "./Artist";
import Form from "./Form";
import Menu from "./Menu";
import {url_back} from './Consts'

class Home extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            headerImage: '',
            artwork_content: '',
            artworks: [],
            artist_image: '',
            artist_content: '',
            email_content: '',
        }
    }

        componentDidMount()
    {
        axios.get(url_back+'/home/').then(response => {
            let data = response.data.data
            this.setState({
                    headerImage: data.header_image,
                    artwork_content: data.artwork_content,
                    artworks: data.artworks,
                    artist_image: data.artist_image,
                    artist_content:  data.artist_content,
                    email_content:   data.email_content,
                })
            }).catch(error=>{

        })

            $(window).scroll(function () {
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop > 900) {
                        $('.header-sticky').addClass('fadeInDown');
                        $('.header-sticky').removeClass('fadeOutUp');
                        $('.header-sticky').addClass('animated');
                    } else {
                        $('.header-sticky').addClass('fadeOutUp');
                        $('.header-sticky').removeClass('fadeInUp');
                        $('.header-sticky').removeClass('animated');
                    }
            });

               $(window).scroll(function () {
                   $('.parallax-container').each(function (i) {
                       var scrollTop = $(window).scrollTop() + 0;
                       var elementOffset = $(this).offset().top;
                       if (scrollTop > elementOffset) {
                           $(this).css("opacity", 1 - (scrollTop - elementOffset) / 786);
                       }
                   });
               });
               if ($(window).width() > 767) {
                   $('.page-section').addClass('parallax-container');
               } else {
                   $('.page-section').removeClass('parallax-container');
               }

                $('a').bind('click', function (e) {
                    e.preventDefault(); // prevent hard jump, the default behavior

                    var target = $(this).attr("href"); // Set the target as variable

                    $('html, body').stop().animate({
                        scrollTop: $(target).offset().top
                    }, 600, function () {
                       // location.hash = target; //attach the hash (#jumptarget) to the pageurl
                    });

                    return false;
                });

                var doAnimations = function () {

                        var offset = $(window).scrollTop() + $(window).height(),
                            $animatables = $('.animatable');

                        if ($animatables.length == 0) {
                            $(window).off('scroll', doAnimations);
                        }

                        $animatables.each(function (i) {
                            var $animatable = $(this);
                            if (($animatable.offset().top + $animatable.height() - 20) < offset) {
                                $animatable.removeClass('animatable').addClass('animated');
                            }
                        });

                };

                $(window).on('scroll', doAnimations);
                $(window).trigger('scroll');

                if($('#content-slider').length){
                       $('#content-slider').lightSlider({
                        item: 3,
                        loop: false,
                        slideMove: 2,
                        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
                        speed: 600,
                        responsive: [
                            {
                                breakpoint:900,
                                settings: {
                                    item: 2,
                                    slideMove: 1,
                                    slideMargin: 6,
                                }
                            },

                            {
                                breakpoint: 767,
                                settings: {
                                    item: 1,
                                    slideMove: 1
                                }
                            }]
                    });
                }
                $('.carousel-control-next').on('click',function(){
                    $('#carouselItem').carousel('next')
                 })
                $('.carousel-control-prev').on('click',function(){
                    $('#carouselItem').carousel('prev')
                })

                // if (document.getElementById('styleSwitch').checked) {
                //     document.getElementById('gallery').classList.add("custom");
                //     document.getElementById('galleryModal').classList.add("custom");
                // } else {
                //     document.getElementById('gallery').classList.remove("custom");
                //     document.getElementById('galleryModal').classList.remove("custom");
                // }

                $(window).scroll(function () {
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop > 900) {
                        $('.header-sticky').addClass('fadeInDown');
                        $('.header-sticky').removeClass('fadeOutUp');
                        $('.header-sticky').addClass('animated');
                    } else {
                        $('.header-sticky').addClass('fadeOutUp');
                        $('.header-sticky').removeClass('fadeInUp');
                        $('.header-sticky').removeClass('animated');
                    }
                });

    }

    render()
    {
        const {headerImage,artwork_content, artworks, artist_image, artist_content, email_content} = this.state

        return (
            <div className ="wrapper home">
                    <Menu ></Menu>

                    <section className="main-banner">
                        <div className="parallax-container">
                            <img src= {headerImage} className="cover-bg" alt="background"/>
                        </div>
                        <h2 className="generic-title"><img src="logo.svg" className="logo"/></h2>
                        <Menu classMenu='top-menu' />
                    </section>
                    <section className="container grid parallax-container page-section hero" id="1">
                           <div className="heading">
                               {Parser(artwork_content)}
                           </div>
                            <Artworks artworks={artworks} />
                       </section>

                       <Artist artist_image={artist_image} artist_content={artist_content} />


                        <Form email_content={email_content} />
          </div>
        )
    }
}

export default Home