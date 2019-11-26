
// RADAR CHART
Highcharts.chart({

    chart: {
        renderTo: 'radar',
        polar: true
    },

    title: {
        text: 'Owen Wilson is a Seasoned Comedic Actor'
    },

    subtitle: {
        text: 'Radar Chart of Movie Generes of Movies Owen Wilson has Acted In and Movies Vince Vaughn has Acted In.'
    },

    pane: {
        startAngle: -100,
        endAngle: 260
    },

    xAxis: {
        categories: ['Action','Adventure','Animation','Comedy', 'Crime','Drama', 'Romance','Thriller', 'Other'],
        tickmarkPlacement: 'on'
    },

    yAxis: {
        min: 0,
        max: 51,
        tickmarkPlacement: 'on'
    },

    plotOptions: {
        series: {
            // pointStart: 0,
            // pointInterval: 45
        },
        column: {
            pointPadding: 0,
            groupPadding: 0
        }
    },
    series: [{
        type: 'area',
        name: 'Movies Owen Wilson has Acted In',
        data: [16,18,11,60,9,24,14,10,29],
        color: '#4185F3'
        },
        { 
        type: 'area',
        name: 'Movies Vince Vaughn has Acted In',
        data: [10,6 ,2 ,43 ,15 ,40 ,10 ,13 ,33],
        color: '#363C46'
        },

]
});

// WORD CLOUD
var text = 'marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley marley car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car car sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack sack dog dog dog dog dog dog dog dog dog dog dog dog dog dog dog dog dog dog dog dog dog dog dog dog dog dog dog dog dog dog dog dog dog dog dog dog dog dog dog dog dog dog dog dog dog dog dog love love love love love love love love love love love love love love love love love love love love love love love love love love love love love love fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck fuck whoa whoa whoa whoa whoa whoa whoa whoa whoa whoa whoa whoa whoa whoa whoa whoa whoa whoa whoa whoa whoa bed bed bed bed bed bed bed bed bed bed bed bed bed bed bed bed bed bed bed bed bed puppy puppy puppy puppy puppy puppy puppy puppy puppy puppy puppy puppy puppy puppy puppy puppy puppy puppy puppy puppy shit shit shit shit shit shit shit shit shit shit shit shit shit shit shit shit shit shit huh huh huh huh huh huh huh huh huh huh huh huh huh huh huh huh huh huh hahaha hahaha hahaha hahaha hahaha hahaha hahaha hahaha hahaha hahaha hahaha hahaha hahaha hahaha hahaha hahaha hahaha hahaha wedding wedding wedding wedding wedding wedding wedding wedding wedding wedding wedding wedding wedding wedding wedding wedding feet feet feet feet feet feet feet feet feet feet feet feet feet feet feet feet family family family family family family family family family family family family family family family family god god god god god god god god god god god god god god god god buddy buddy buddy buddy buddy buddy buddy buddy buddy buddy buddy buddy buddy buddy buddy hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi lightning lightning lightning lightning lightning lightning lightning lightning lightning lightning lightning lightning lightning lightning heart heart heart heart heart heart heart heart heart heart heart heart heart wow wow wow wow wow wow wow wow wow wow wow wow wow garage garage garage garage garage garage garage garage garage garage garage garage garage fucking fucking fucking fucking fucking fucking fucking fucking fucking fucking fucking fucking fucking boat boat boat boat boat boat boat boat boat boat boat boat boat cmon cmon cmon cmon cmon cmon cmon cmon cmon cmon cmon racecar racecar racecar racecar racecar racecar racecar racecar racecar easy easy easy easy easy easy easy easy kachow kachow kachow kachow kachow kachow kachow kachow nononono nononono nononono nononono nononono nononono nononono nononono wheel wheel wheel wheel wheel wheel wheel wall wall wall wall wall wall wall idiot idiot idiot idiot idiot idiot bring bring bring bring bring bring exactly exactly exactly exactly exactly exactly son son son son son son obviously obviously obviously obviously obviously obviously dad dad dad dad dad dad flying flying flying flying flying flying christ christ christ christ christ christ bunch bunch bunch bunch bunch bunch kiss kiss kiss kiss kiss kiss neighbors neighbors neighbors neighbors neighbors neighbors calm calm calm calm calm calm breath breath breath breath breath breath bullshit bullshit bullshit bullshit bullshit early early early early early question question question question question'
var lines = text.split(/[,\. ]+/g),
    data = Highcharts.reduce(lines, function (arr, word) {
        var obj = Highcharts.find(arr, function (obj) {
            return obj.name === word;
        });
        if (obj) {
            obj.weight += 1;
        } else {
            obj = {
                name: word,
                weight: 1
            };
            arr.push(obj);
        }
        return arr;
    }, []);

Highcharts.chart({
    chart: {
        renderTo: 'cloud'
    }, 
    series: [{
        type: 'wordcloud',
        data: data,
        name: 'Occurrences',
        colors: ['#4185F3',
        '#427CDD',
        '#406AB2',
        '#3E5A8E',
        '#3B4A68',
        '#363C46'],
        rotation: {
            from: 0,
            to: 0,
        },
        minFontSize: 5,
        style: {
		fontFamily: 'Arial',
	}
    }],
    title: {
        text: 'Words Owen Wilson Has Said In Movies'
    },
    subtitle: {
        text: 'Info source: <a href="https://www.http://www.script-o-rama.com/movie_scripts/">www.script-o-rama.com</a>'
    }
});


// TIMELINE
Highcharts.chart({
    chart: {
        renderTo: 'time',
        zoomType: 'x',
        type: 'timeline',
        backgroundColor: 'transparent'
    },
    xAxis: {
        type: 'datetime',
        visible: false
    },
    yAxis: {
        gridLineWidth: 1,
        title: null,
        labels: {
            enabled: false
        }
    },
    legend: {
        enabled: false
    },
    title: {
        text: 'Timeline of Owen Wilson Movies'
    },
    subtitle: {
        text: 'Info source: <a href="https://www.imdb.com/name/nm0005562/">www.imdb.com</a>'
    },
    tooltip: {
        style: {
            width: 300
        }
    },
    colors: [
        '#4185F3',
        '#427CDD',
        '#406AB2',
        '#3E5A8E',
        '#3B4A68',
        '#363C46'
    ],
    series: [{
        dataLabels: {
            allowOverlap: false,
            format: '<span style="color:{point.color}">● </span><span style="font-weight: bold;" > ' +
                '{point.x:%d %b %Y}</span><br/>{point.label}'
        },
        marker: {
            symbol: 'circle'
        },
        data: [{
            x: Date.UTC(1993, 2, 21),
            name: 'Bottle Rocket',
            label: 'Bottle Rocket',
            description: 'Rating: 6.8'
        }, {
            x: Date.UTC(1996, 6, 14),
            name: 'The Cable Guy',
            label: 'The Cable Guy',
            description: 'Rating: 6.1'
        }, {
            x: Date.UTC(1997, 4, 11),
            name: 'Anaconda',
            label: 'Anaconda',
            description: 'Rating: 4.8'
        }, {
            x: Date.UTC(1998, 6, 30),
            name: 'Armageddon',
            label: 'Armageddon',
            description: 'Rating: 6.7'
        }, {
            x: Date.UTC(1998, 9, 16),
            name: 'Permanent Midnight',
            label: 'Permanent Midnight',
            description: 'Rating: 6.3'
        }, {
            x: Date.UTC(1999, 9, 17),
            name: 'Breakfast of Champions',
            label: 'Breakfast of Champions',
            description: 'Rating: 4.6'
        },{
            x: Date.UTC(1999, 7, 23),
            name: 'The Haunting',
            label: 'The Haunting',
            description: 'Rating: 5'
        },{
            x: Date.UTC(2000, 5, 23),
            name: 'Shanghai Noon',
            label: 'Shanghai Noon',
            description: 'Rating: 6.5'
        },{
            x: Date.UTC(2000, 10, 6),
            name: 'Meet the Parents',
            label: 'Meet the Parents',
            description: 'Rating: 7'
        },{
            x: Date.UTC(2001, 9, 28),
            name: 'Zoolander',
            label: 'Zoolander',
            description: 'Rating: 6.5'
        },{
            x: Date.UTC(2001, 12, 14),
            name: 'The Royal Tenenbaums',
            label: 'The Royal Tenenbaums',
            description: 'Rating: 7.6'
        },{
            x: Date.UTC(2001, 10, 30),
            name: 'Behind Enemy Lines',
            label: 'Behind Enemy Lines',
            description: 'Rating: 6.4'
        },{
            x: Date.UTC(2002, 10, 23),
            name: 'I Spy',
            label: 'I Spy',
            description: 'Rating: 5.4'
        },{
            x: Date.UTC(2003, 2, 3),
            name: 'Shanghai Knights',
            label: 'Shanghai Knights',
            description: 'Rating: 6.2'
        },{
            x: Date.UTC(2004, 1, 30),
            name: 'The Big Bounce',
            label: 'The Big Bounce',
            description: 'Rating: 4.9'
        },{
            x: Date.UTC(2004, 3, 5),
            name: 'Starsky & Hutch',
            label: 'Starsky & Hutch',
            description: 'Rating: 6.1'
        },{
            x: Date.UTC(2004, 6, 16),
            name: 'Around the World in 80 Days',
            label: 'Around the World in 80 Days',
            description: 'Rating: 5.9'
        },{
            x: Date.UTC(2004, 12, 25),
            name: 'The Life Aquatic with Steve Zissou',
            label: 'The Life Aquatic with Steve Zissou',
            description: 'Rating: 7.3'
        },{
            x: Date.UTC(2004, 12, 22),
            name: 'Meet the Fockers',
            label: 'Meet the Fockers',
            description: 'Rating: 6.3'
        },{
            x: Date.UTC(2005, 3, 11),
            name: 'The Wendell Baker Story',
            label: 'The Wendell Baker Story',
            description: 'Rating: 5.6'
        },{
            x: Date.UTC(2005, 7, 15),
            name: 'Wedding Crashers',
            label: 'Wedding Crashers',
            description: 'Rating: 6.9'
        },{
            x: Date.UTC(2006, 6, 9),
            name: 'Cars',
            label: 'Cars',
            description: 'Rating: 7.1'
        },{
            x: Date.UTC(2006, 7, 14),
            name: 'You, Me and Dupree',
            label: 'You, Me and Dupree',
            description: 'Rating: 5.6'
        },{
            x: Date.UTC(2006, 12, 17),
            name: 'Night at the Museum',
            label: 'Night at the Museum',
            description: 'Rating: 6.4'
        },{
            x: Date.UTC(2007, 10, 26),
            name: 'The Darjeeling Limited',
            label: 'The Darjeeling Limited',
            description: 'Rating: 7.2'
        },{
            x: Date.UTC(2008, 3, 21),
            name: 'Drillbit Taylor',
            label: 'Drillbit Taylor',
            description: 'Rating: 5.7'
        },{
            x: Date.UTC(2008, 12, 25),
            name: 'Marley & Me',
            label: 'Marley & Me',
            description: 'Rating: 7.1'
        },{
            x: Date.UTC(2009, 5, 22),
            name: 'Night at the Museum: Battle of the Smithsonian',
            label: 'Night at the Museum: Battle of the Smithsonian',
            description: 'Rating: 6'
        },{
            x: Date.UTC(2009, 11, 13),
            name: 'Fantastic Mr. Fox',
            label: 'Fantastic Mr. Fox',
            description: 'Rating: 7.8'
        },{
            x: Date.UTC(2010, 6, 4),
            name: 'Marmaduke',
            label: 'Marmaduke',
            description: 'Rating: 4.2'
        },{
            x: Date.UTC(2010, 12, 17),
            name: 'How Do You Know',
            label: 'How Do You Know',
            description: 'Rating: 5.4'
        },{
            x: Date.UTC(2010, 12, 22),
            name: 'Little Fockers',
            label: 'Little Fockers',
            description: 'Rating: 5.5'
        },{
            x: Date.UTC(2011, 2, 25),
            name: 'Hall Pass',
            label: 'Hall Pass',
            description: 'Rating: 5.8'
        },{
            x: Date.UTC(2011, 5, 20),
            name: 'Midnight in Paris',
            label: 'Midnight in Paris',
            description: 'Rating: 7.7'
        },{
            x: Date.UTC(2011, 6, 18),
            name: 'Cars 2',
            label: 'Cars 2',
            description: 'Rating: 6.1'
        },{
            x: Date.UTC(2011, 10, 14),
            name: 'The Big Year',
            label: 'The Big Year',
            description: 'Rating: 6.2'
        },{
            x: Date.UTC(2013, 5, 29),
            name: 'The Internship',
            label: 'The Internship',
            description: 'Rating: 6.3'
        },{
            x: Date.UTC(2014, 8, 22),
            name: 'Are You Here',
            label: 'Are You Here',
            description: 'Rating: 5.3'
        },{
            x: Date.UTC(2013, 11, 1),
            name: 'Free Birds',
            label: 'Free Birds',
            description: 'Rating: 5.9'
        },{
            x: Date.UTC(2014, 3, 7),
            name: 'The Grand Budapest Hotel',
            label: 'The Grand Budapest Hotel',
            description: 'Rating: 8.1'
        },{
            x: Date.UTC(2014, 11, 3),
            name: "She's Funny That Way",
            label: "She's Funny That Way",
            description: 'Rating: 6.1'
        },{
            x: Date.UTC(2014, 10, 3),
            name: 'The Hero of Color City',
            label: 'The Hero of Color City',
            description: 'Rating: 3.9'
        },{
            x: Date.UTC(2014, 12, 12),
            name: 'Inherent Vice',
            label: 'Inherent Vice',
            description: 'Rating: 6.7'
        },{
            x: Date.UTC(2014, 12, 11),
            name: 'Night at the Museum: Secret of the Tomb',
            label: 'Night at the Museum: Secret of the Tomb',
            description: 'Rating: 6.2'
        },{
            x: Date.UTC(2015, 8, 26),
            name: 'No Escape',
            label: 'No Escape',
            description: 'Rating: 6.8'
        },{
            x: Date.UTC(2016, 2, 12),
            name: 'Zoolander 2',
            label: 'Zoolander 2',
            description: 'Rating: 4.7'
        },{
            x: Date.UTC(2016, 9, 30),
            name: 'Masterminds',
            label: 'Masterminds',
            description: 'Rating: 5.8'
        },{
            x: Date.UTC(2017, 1, 19),
            name: 'Lost in London',
            label: 'Lost in London',
            description: 'Rating: 6.2'
        },{
            x: Date.UTC(2017, 6, 17),
            name: 'Cars 3',
            label: 'Cars 3',
            description: 'Rating: 6.7'
        },{
            x: Date.UTC(2017, 11, 17),
            name: 'Wonder',
            label: 'Wonder',
            description: 'Rating: 8'
        },{
            x: Date.UTC(2017, 12, 13),
            name: 'Father Figures',
            label: 'Father Figures',
            description: 'Rating: 5.5'
        }]
    }]
});






// SOUND EFFECTS
// Mouseover/ Click sound effect- by JavaScript Kit (www.javascriptkit.com)
// Visit JavaScript Kit at http://www.javascriptkit.com/ for full source code

//** Usage: Instantiate script by calling: var uniquevar=createsoundbite("soundfile1", "fallbackfile2", "fallebacksound3", etc)
//** Call: uniquevar.playclip() to play sound

var html5_audiotypes={ //define list of audio file extensions and their associated audio types. Add to it if your specified audio file isn't on this list:
    "mp3": "audio/mpeg",
    "mp4": "audio/mp4",
    "ogg": "audio/ogg",
    "wav": "audio/wav"
}

function createsoundbite(sound){
    var html5audio=document.createElement('audio')
    if (html5audio.canPlayType){ //check support for HTML5 audio
        for (var i=0; i<arguments.length; i++){
            var sourceel=document.createElement('source')
            sourceel.setAttribute('src', arguments[i])
            if (arguments[i].match(/\.(\w+)$/i))
                sourceel.setAttribute('type', html5_audiotypes[RegExp.$1])
            html5audio.appendChild(sourceel)
        }
        html5audio.load()
        html5audio.playclip=function(){
            html5audio.pause()
            html5audio.currentTime=0
            html5audio.play()
        }
        return html5audio
    }
    else{
        return {playclip:function(){throw new Error("Your browser doesn't support HTML5 audio unfortunately")}}
    }
}

//Initialize two sound clips with 1 fallback file each:
var wowc=createsoundbite("wowc", "sounds/wowc.mp3")
var wowf=createsoundbite("wowf", "sounds/wowf.mp3")
var wowg=createsoundbite("wowg", "sounds/wowg.mp3")
var wowi=createsoundbite("wowi", "sounds/wowi.mp3")
var wowj=createsoundbite("wowj", "sounds/wowj.mp3")
var wowk=createsoundbite("wowk", "sounds/wowk.mp3")