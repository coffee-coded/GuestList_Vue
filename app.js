var vm1 = new Vue({
    el:'#app',
    data: {
        event : {
            eventDate: 'August 14th - 16th',
            eventTitle : 'Summer Festival!',
            signUpText: 'Add your name to the guest list for <em>exclusive</em> offers:',
            eventDesc : 'It\'s back! This years summer festival will be in the beautiful countryside featuring our best line up ever!',
        },
        newNameText: '',
        guestName : [],
        eventCapacity: 25,
        eventCapacityPercentage: 0,
    },

    methods:{
        formSubmitted: function() {
            if(this.newNameText.length > 0 && this.eventCapacityPercentage < 100){
                this.guestName.push(this.newNameText.toLowerCase()) 
                this.newNameText = '',
                this.eventCapacityPercentage= this.guestName.length / (this.eventCapacity / 100)        
        }
        },
        // keyPressed: function() {
        //     console.log('key Pressed')
        // }
        
    },

    computed:{
         sortName: function () {
             return this.guestName.sort()
        }

    },
    watch:{
        // guestName: function(data) {
        //     console.log("Watch Triggerred")
        // }
    },
    filters:{
        formatName: function(value){
            // console.log(value)
            return value.slice(0,1).toUpperCase() + value.slice(1).toLowerCase()
        }
    },
    beforeCreate: function(){
        console.log('before create')
    },
    created: function(){
        console.log('created')
    },
    beforeMount: function(){
        console.log('before mount')
    },
    mounted: function(){
        console.log('mounted')
    },
    beforeUpdate: function(){
        console.log('before update')
    },
    updated: function(){
        console.log('updated')
    },
    beforeDestroy: function(){
        console.log('before destroy')
    },
    destroyed: function(){
        console.log('destroyed')
    }
});


var vm2 = new Vue(
    {
        el:'#navigation',
        data:{
            appName: 'Guest List',
            navLinks :[
                {name:"Home", id:1,url:"https://www.google.com"},
                {name:"Upcoming Events", id:2,url:"https://www.amazon.com"},
                {name:"Guest Benefits", id:3,url:"https://www.ebay.com"},
                {name:"Latest News", id:4,url:"https://www.facebook.com"},
            ]
        },
        methods:{
            
        }
    }
)

