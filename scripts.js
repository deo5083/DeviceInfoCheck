function checkDevice(){
    var parser = new UAParser();

    var result = parser.getResult();
    
    
    var infoDiv = document.getElementById('info');

    var osDiv = document.getElementById('os');
    var versionDiv = document.getElementById('version');
    var deviceDiv = document.getElementById('device');
    var deviceRow = document.getElementById('deviceRow');
    

    osDiv.value = result.os.name;
    versionDiv.value = result.os.version;

    if(result.device.vendor){
        deviceDiv.value = capitalize(result.device.type)  +" - "+ result.device.vendor +" "+ result.device.model ;
        deviceRow.style.display = '';
    } else {
        deviceRow.style.display = 'none';
    }
    

    infoDiv.style.display = '';

}

function capitalize(s)
{
    //return s;
    return s[0].toUpperCase() + s.slice(1);
}

