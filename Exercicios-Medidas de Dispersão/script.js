function media () {
    const a1 = document.getElementById("a1").value
    const a2 = document.getElementById("a2").value
    const a3 = document.getElementById("a3").value
    const a4 = document.getElementById("a4").value
    const a5 = document.getElementById("a5").value
    
    const media = (a1+a2+a3+a4+a5)/5

    document.getElementById('resultmedia').value = media
    console.log(media)
}