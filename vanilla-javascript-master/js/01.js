( función ( d ,  t ,  e ,  m ) {
    
    // Inicialización del widget de clasificación asíncrona.
    ventana . RW_Async_Init  =  function ( ) {
                
        RW . init ( {
            huid : "477967" ,
            uid : "b8f5b8565d7f1de2d6fadeac17020678" ,
            fuente : "sitio web" ,
            opciones : {
                "avanzado" : {
                    "fuente" : {
                        "tipo" : "arial"
                    } ,
                    "texto" : {
                        "rateThis" : "!"
                    }
                } ,
                "tamaño" : "diminuto" ,
                "tipo" : "nero" ,
                "lng" : "es" ,
                "estilo" : "pulgares" ,
                "isDummy" : falso
            } 
        } ) ;
        RW . render ( ) ;
    } ;
        // Adjuntar biblioteca JavaScript Rating-Widget.
    var  rw ,  s  =  d . getElementsByTagName ( e ) [ 0 ] ,  id  =  "rw-js" ,
        l  =  d . ubicación ,  ck  =  "Y"  +  t . getFullYear ( )  + 
        "M"  +  t . getMonth ( )  +  "D"  +  t . getDate ( ) ,  p  =  l . protocolo ,
        f  =  ( ( l . buscar . indexOf ( "DBG =" )  >  - 1 ) ? "" : ".min" ) ,
        a  =  ( "https:"  ==  p ? "seguro".  +  m  +  "js /" : "js."  +  m ) ;
    if  ( d . getElementById ( id ) )  return ;              
    rw  =  d . createElement ( e ) ;
    rw . id  =  id ;  rw . async  =  verdadero ;  rw . type  =  "texto / javascript" ;
    rw . src  =  p  +  "//"  +  a  +  "externo"  +  f  +  ".js? ck ="  +  ck ;
    s . parentNode . insertBefore ( rw ,  s ) ;
    } ( documento ,  nueva  fecha ( ) ,  "script" ,  "rating-widget.com/" ) ) ;