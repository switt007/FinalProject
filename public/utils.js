function getFirstPointFromGpx(gpxcontent) {
  let xmlDoc = JAK.XML.createDocument(gpxcontent); 
  let tracks = xmlDoc.getElementsByTagName("trk");  

  let lat = 0.0;
  let lon = 0.0;

  for (let i = 0; i < tracks.length; i ++ ) {
    var segments = tracks[i].getElementsByTagName("trkseg");

    for (let j = 0; j < segments.length; j ++ ) {
      let pts = segments[j].getElementsByTagName("trkpt");
      lat = pts[0].attributes['lat'].value;            
      lon = pts[0].attributes['lon'].value;

      return { lat: parseFloat(lat), lon: parseFloat(lon) };
    }
  }

  return { lat: 0.0, lon: 0.0 };
}