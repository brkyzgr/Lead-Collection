$(function(){
    const tabletMediaQuery = window.matchMedia("(max-width: 1024px)");
    const phoneMediaQuery = window.matchMedia("(max-width: 768px)");

    
    const handleMediaQueryChange = (mediaQuery) => {
        if (mediaQuery.matches) {
            
            $(".container").css({
                "grid-template-columns": "1fr",
                "object-fit": "fill",
                
            });
            $(".img").css({
                "object-fit": "fill",
            });
            $(".box1, .box2").css({
                "object-fit": "fill",
            });
            
        } else {
            
            $(".container").css({
                "grid-template-columns": "350px 350px",
                "width": "700px",
                "height": "400px",
            });
            $(".img").css({
                "width": "350px",
                "height": "400px",
            });
            $(".box1, .box2").css({
                "width": "350px",
            });
            
        }
    };

    
    
    handleMediaQueryChange(tabletMediaQuery);

    
    tabletMediaQuery.addListener(handleMediaQueryChange);
    phoneMediaQuery.addListener(handleMediaQueryChange);
    
    const UserData = {
        "phone": 5555555555,
        "email":"john.doe@gmail.com"
    }

    $("body").css({
        "display":"flex",
        "justify-content":"center",
        "align-items":"center",
        "margin":"250px",
        
        
    })
    $("html").css({
        "padding":"0",
        "margin":"0",
        "box-sizing":"border-box"
    })
    $("body").html("<div class='container'></div>")


    $(".container").css({
        "display":"grid",
        "width":"700px",
        "height":"400px",
        "border":"1px solid black",
        "border-radius":"3px",
        "grid-template-columns":"350px 350px"

    })

    $(".container").html("<div class='box1'><img class ='img' src='https://cdna.artstation.com/p/assets/images/images/017/154/416/4k/louie-woodhouse-highresscreenshot00066.jpg?1554895082'></div><div class='box2'></div>")
    
    
    
    $(".img").css({
        "width":"350px",
        "height":"400px",
    })
    $(".box2").html("<button>x</button><br><h1>Title</h1><br><p>Short Text</p><input class ='input-eml' type='email'><br><input class = 'input-tl' type='tel'><br><button class='btn-sub' type='submit'>Be First</button><br><input type='checkbox' class='check'><a href='https://en.wikipedia.org/wiki/General_Data_Protection_Regulation' target='_blank'>By submitting this form, you are giving consent for your e-mail to be used and disclosed.</a>")
    $("a").css({
        "text-decoration":"none",
        "color":"black"
    })
    $("button").css({
        "position":"relative",
        "right":"-325px",
        "background":"white",
        "border":"none",
    })
    $("h1,p").css({
        "text-align":"center",
        "font-family":"Georgia, serif",
        "margin":"10px"
        
    })
    $(".check").css({
        "text-align":"center",
        "font-family":"Georgia, serif",
        "margin":"10px"
    })

    
    $(".input-eml").css({
        "border":"1px solid gray",
        "border-radius":"5px",
        "width":"50%",
        "height":"30px",
        "margin-left":"85px",
        "margin-bottom":"10px",
    })
    $(".input-tl").css({
        "border":"1px solid gray",
        "border-radius":"5px",
        "width":"50%",
        "height":"30px",
        "margin-left":"85px",
        "margin-bottom":"10px",
    })
    $(".btn-sub").css({
        "border":"1px solid gray",
        "background":"black",
        "color":"white",
        "border-radius":"5px",
        "width":"50%",
        "height":"30px",
        "left":"88px",
        "margin-bottom":"10px",
        
    })

    $(".btn-sub").on("click",async function(){
        const enteredEmail = $(".input-eml").val();
        const enteredPhone = $(".input-tl").val();
        const isCheckboxChecked = $(".check").is(":checked");
        
        if (isCheckboxChecked) {
            if(enteredEmail === UserData.email && parseInt(enteredPhone) === UserData.phone){
                
                $("h1").text("Amazing!")
                $("p").text("Here is your discount code you can use in your next order.This coupon code will be valid until 01.01.2020.")
                $(".input-eml").remove()
                $(".input-tl").remove()
                
                $(".check").remove()
                $("a").remove()
                const response = await post(UserData)
                const couponCode = response && response.coupon_code;
                
                $(".box2").html("<button>x</button><br><h1>Amazing!</h1><br><p>Here is your discount code you can use in your next order. This coupon code will be valid until 01.01.2020.</p><br><textarea class='textArea'></textarea><br><button class='btn-sub' type='submit'>Copy</button>");
                $("button").css({
                    "position":"relative",
                    "right":"-325px",
                    "background":"white",
                    "border":"none",
                })

                $("h1,p").css({
                    "text-align":"center",
                    "font-family":"Georgia, serif",
                    "margin":"10px"
                    
                })
                $(".textArea").css({
                    "border":"1px solid gray",
                    "border-radius":"5px",
                    "resize":"none",
                    "width":"50%",
                    "height":"30px",
                    "margin-left":"85px",
                    "margin-bottom":"10px",
                })
                $("textArea").val(couponCode)
                
                $(".btn-sub").css({
                    "border":"1px solid gray",
                    "background":"black",
                    "color":"white",
                    "border-radius":"5px",
                    "width":"50%",
                    "height":"30px",
                    "left":"88px",
                    "margin-bottom":"10px",
                    
                })

                

                $(".btn-sub").text("Copy")
                $(".btn-sub").on("click", function() {
                    $(".textArea").select();
    
                    document.execCommand("copy");
    
                    $(".btn-sub").text("Copied!");
                });
               

            }else {
                alert("Try Again")
            }
        }
        
    })

    async function post(Data){
        try {
            const response = await fetch("https://opt-interview-projects.onrender.com/lead-collection",{
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(Data),
            })
            const result = await response.json();
            return result
            
            


        } catch(error){
            console.error("Error",error);
        }
        
    }

    
   
    
   

    
    
   


    
    
    
    



})

