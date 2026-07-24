var wms_layers = [];


        var lyr_BasemapGoogleEarth_0 = new ol.layer.Tile({
            'title': 'Basemap Google Earth',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_FasosdanFasumTiang_Listrik_1 = new ol.format.GeoJSON();
var features_FasosdanFasumTiang_Listrik_1 = format_FasosdanFasumTiang_Listrik_1.readFeatures(json_FasosdanFasumTiang_Listrik_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasosdanFasumTiang_Listrik_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasosdanFasumTiang_Listrik_1.addFeatures(features_FasosdanFasumTiang_Listrik_1);
var lyr_FasosdanFasumTiang_Listrik_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasosdanFasumTiang_Listrik_1, 
                style: style_FasosdanFasumTiang_Listrik_1,
                popuplayertitle: 'Fasos dan Fasum — Tiang_Listrik',
                interactive: true,
                title: '<img src="styles/legend/FasosdanFasumTiang_Listrik_1.png" /> Fasos dan Fasum — Tiang_Listrik'
            });
var format_FasosdanFasumSosial_dan_Kesejahteraan_2 = new ol.format.GeoJSON();
var features_FasosdanFasumSosial_dan_Kesejahteraan_2 = format_FasosdanFasumSosial_dan_Kesejahteraan_2.readFeatures(json_FasosdanFasumSosial_dan_Kesejahteraan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasosdanFasumSosial_dan_Kesejahteraan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasosdanFasumSosial_dan_Kesejahteraan_2.addFeatures(features_FasosdanFasumSosial_dan_Kesejahteraan_2);
var lyr_FasosdanFasumSosial_dan_Kesejahteraan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasosdanFasumSosial_dan_Kesejahteraan_2, 
                style: style_FasosdanFasumSosial_dan_Kesejahteraan_2,
                popuplayertitle: 'Fasos dan Fasum — Sosial_dan_Kesejahteraan',
                interactive: true,
                title: '<img src="styles/legend/FasosdanFasumSosial_dan_Kesejahteraan_2.png" /> Fasos dan Fasum — Sosial_dan_Kesejahteraan'
            });
var format_FasosdanFasumRekreasi_3 = new ol.format.GeoJSON();
var features_FasosdanFasumRekreasi_3 = format_FasosdanFasumRekreasi_3.readFeatures(json_FasosdanFasumRekreasi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasosdanFasumRekreasi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasosdanFasumRekreasi_3.addFeatures(features_FasosdanFasumRekreasi_3);
var lyr_FasosdanFasumRekreasi_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasosdanFasumRekreasi_3, 
                style: style_FasosdanFasumRekreasi_3,
                popuplayertitle: 'Fasos dan Fasum — Rekreasi',
                interactive: true,
                title: '<img src="styles/legend/FasosdanFasumRekreasi_3.png" /> Fasos dan Fasum — Rekreasi'
            });
var format_FasosdanFasumMultiple_Buffer_Sosial_dan_Kesejahteraan_4 = new ol.format.GeoJSON();
var features_FasosdanFasumMultiple_Buffer_Sosial_dan_Kesejahteraan_4 = format_FasosdanFasumMultiple_Buffer_Sosial_dan_Kesejahteraan_4.readFeatures(json_FasosdanFasumMultiple_Buffer_Sosial_dan_Kesejahteraan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasosdanFasumMultiple_Buffer_Sosial_dan_Kesejahteraan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasosdanFasumMultiple_Buffer_Sosial_dan_Kesejahteraan_4.addFeatures(features_FasosdanFasumMultiple_Buffer_Sosial_dan_Kesejahteraan_4);
var lyr_FasosdanFasumMultiple_Buffer_Sosial_dan_Kesejahteraan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasosdanFasumMultiple_Buffer_Sosial_dan_Kesejahteraan_4, 
                style: style_FasosdanFasumMultiple_Buffer_Sosial_dan_Kesejahteraan_4,
                popuplayertitle: 'Fasos dan Fasum — Multiple_Buffer_Sosial_dan_Kesejahteraan',
                interactive: true,
                title: '<img src="styles/legend/FasosdanFasumMultiple_Buffer_Sosial_dan_Kesejahteraan_4.png" /> Fasos dan Fasum — Multiple_Buffer_Sosial_dan_Kesejahteraan'
            });
var format_FasosdanFasumMultiple_Buffer_Rekreasi_5 = new ol.format.GeoJSON();
var features_FasosdanFasumMultiple_Buffer_Rekreasi_5 = format_FasosdanFasumMultiple_Buffer_Rekreasi_5.readFeatures(json_FasosdanFasumMultiple_Buffer_Rekreasi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasosdanFasumMultiple_Buffer_Rekreasi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasosdanFasumMultiple_Buffer_Rekreasi_5.addFeatures(features_FasosdanFasumMultiple_Buffer_Rekreasi_5);
var lyr_FasosdanFasumMultiple_Buffer_Rekreasi_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasosdanFasumMultiple_Buffer_Rekreasi_5, 
                style: style_FasosdanFasumMultiple_Buffer_Rekreasi_5,
                popuplayertitle: 'Fasos dan Fasum — Multiple_Buffer_Rekreasi',
                interactive: true,
                title: '<img src="styles/legend/FasosdanFasumMultiple_Buffer_Rekreasi_5.png" /> Fasos dan Fasum — Multiple_Buffer_Rekreasi'
            });
var format_FasosdanFasumMultiple_Buffer_Layanan_Transportasi_6 = new ol.format.GeoJSON();
var features_FasosdanFasumMultiple_Buffer_Layanan_Transportasi_6 = format_FasosdanFasumMultiple_Buffer_Layanan_Transportasi_6.readFeatures(json_FasosdanFasumMultiple_Buffer_Layanan_Transportasi_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasosdanFasumMultiple_Buffer_Layanan_Transportasi_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasosdanFasumMultiple_Buffer_Layanan_Transportasi_6.addFeatures(features_FasosdanFasumMultiple_Buffer_Layanan_Transportasi_6);
var lyr_FasosdanFasumMultiple_Buffer_Layanan_Transportasi_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasosdanFasumMultiple_Buffer_Layanan_Transportasi_6, 
                style: style_FasosdanFasumMultiple_Buffer_Layanan_Transportasi_6,
                popuplayertitle: 'Fasos dan Fasum — Multiple_Buffer_Layanan_Transportasi',
                interactive: true,
                title: '<img src="styles/legend/FasosdanFasumMultiple_Buffer_Layanan_Transportasi_6.png" /> Fasos dan Fasum — Multiple_Buffer_Layanan_Transportasi'
            });
var format_FasosdanFasumMultiple_Buffer_Fasilitas_Pendidikan_7 = new ol.format.GeoJSON();
var features_FasosdanFasumMultiple_Buffer_Fasilitas_Pendidikan_7 = format_FasosdanFasumMultiple_Buffer_Fasilitas_Pendidikan_7.readFeatures(json_FasosdanFasumMultiple_Buffer_Fasilitas_Pendidikan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasosdanFasumMultiple_Buffer_Fasilitas_Pendidikan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasosdanFasumMultiple_Buffer_Fasilitas_Pendidikan_7.addFeatures(features_FasosdanFasumMultiple_Buffer_Fasilitas_Pendidikan_7);
var lyr_FasosdanFasumMultiple_Buffer_Fasilitas_Pendidikan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasosdanFasumMultiple_Buffer_Fasilitas_Pendidikan_7, 
                style: style_FasosdanFasumMultiple_Buffer_Fasilitas_Pendidikan_7,
                popuplayertitle: 'Fasos dan Fasum — Multiple_Buffer_Fasilitas_Pendidikan',
                interactive: true,
                title: '<img src="styles/legend/FasosdanFasumMultiple_Buffer_Fasilitas_Pendidikan_7.png" /> Fasos dan Fasum — Multiple_Buffer_Fasilitas_Pendidikan'
            });
var format_FasosdanFasumMultiple_Buffer_Fasilitas_Kesehatan_8 = new ol.format.GeoJSON();
var features_FasosdanFasumMultiple_Buffer_Fasilitas_Kesehatan_8 = format_FasosdanFasumMultiple_Buffer_Fasilitas_Kesehatan_8.readFeatures(json_FasosdanFasumMultiple_Buffer_Fasilitas_Kesehatan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasosdanFasumMultiple_Buffer_Fasilitas_Kesehatan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasosdanFasumMultiple_Buffer_Fasilitas_Kesehatan_8.addFeatures(features_FasosdanFasumMultiple_Buffer_Fasilitas_Kesehatan_8);
var lyr_FasosdanFasumMultiple_Buffer_Fasilitas_Kesehatan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasosdanFasumMultiple_Buffer_Fasilitas_Kesehatan_8, 
                style: style_FasosdanFasumMultiple_Buffer_Fasilitas_Kesehatan_8,
                popuplayertitle: 'Fasos dan Fasum — Multiple_Buffer_Fasilitas_Kesehatan',
                interactive: true,
                title: '<img src="styles/legend/FasosdanFasumMultiple_Buffer_Fasilitas_Kesehatan_8.png" /> Fasos dan Fasum — Multiple_Buffer_Fasilitas_Kesehatan'
            });
var format_FasosdanFasumMultiple_Buffer_Fasilitas_Ibadah_9 = new ol.format.GeoJSON();
var features_FasosdanFasumMultiple_Buffer_Fasilitas_Ibadah_9 = format_FasosdanFasumMultiple_Buffer_Fasilitas_Ibadah_9.readFeatures(json_FasosdanFasumMultiple_Buffer_Fasilitas_Ibadah_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasosdanFasumMultiple_Buffer_Fasilitas_Ibadah_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasosdanFasumMultiple_Buffer_Fasilitas_Ibadah_9.addFeatures(features_FasosdanFasumMultiple_Buffer_Fasilitas_Ibadah_9);
var lyr_FasosdanFasumMultiple_Buffer_Fasilitas_Ibadah_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasosdanFasumMultiple_Buffer_Fasilitas_Ibadah_9, 
                style: style_FasosdanFasumMultiple_Buffer_Fasilitas_Ibadah_9,
                popuplayertitle: 'Fasos dan Fasum — Multiple_Buffer_Fasilitas_Ibadah',
                interactive: true,
                title: '<img src="styles/legend/FasosdanFasumMultiple_Buffer_Fasilitas_Ibadah_9.png" /> Fasos dan Fasum — Multiple_Buffer_Fasilitas_Ibadah'
            });
var format_FasosdanFasumMultiple_Buffer_Balai_Pertemuan_10 = new ol.format.GeoJSON();
var features_FasosdanFasumMultiple_Buffer_Balai_Pertemuan_10 = format_FasosdanFasumMultiple_Buffer_Balai_Pertemuan_10.readFeatures(json_FasosdanFasumMultiple_Buffer_Balai_Pertemuan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasosdanFasumMultiple_Buffer_Balai_Pertemuan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasosdanFasumMultiple_Buffer_Balai_Pertemuan_10.addFeatures(features_FasosdanFasumMultiple_Buffer_Balai_Pertemuan_10);
var lyr_FasosdanFasumMultiple_Buffer_Balai_Pertemuan_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasosdanFasumMultiple_Buffer_Balai_Pertemuan_10, 
                style: style_FasosdanFasumMultiple_Buffer_Balai_Pertemuan_10,
                popuplayertitle: 'Fasos dan Fasum — Multiple_Buffer_Balai_Pertemuan',
                interactive: true,
                title: '<img src="styles/legend/FasosdanFasumMultiple_Buffer_Balai_Pertemuan_10.png" /> Fasos dan Fasum — Multiple_Buffer_Balai_Pertemuan'
            });
var format_FasosdanFasumLayanan_Transportasi_11 = new ol.format.GeoJSON();
var features_FasosdanFasumLayanan_Transportasi_11 = format_FasosdanFasumLayanan_Transportasi_11.readFeatures(json_FasosdanFasumLayanan_Transportasi_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasosdanFasumLayanan_Transportasi_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasosdanFasumLayanan_Transportasi_11.addFeatures(features_FasosdanFasumLayanan_Transportasi_11);
var lyr_FasosdanFasumLayanan_Transportasi_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasosdanFasumLayanan_Transportasi_11, 
                style: style_FasosdanFasumLayanan_Transportasi_11,
                popuplayertitle: 'Fasos dan Fasum — Layanan_Transportasi',
                interactive: true,
                title: '<img src="styles/legend/FasosdanFasumLayanan_Transportasi_11.png" /> Fasos dan Fasum — Layanan_Transportasi'
            });
var format_FasosdanFasumLampu_Jalan_12 = new ol.format.GeoJSON();
var features_FasosdanFasumLampu_Jalan_12 = format_FasosdanFasumLampu_Jalan_12.readFeatures(json_FasosdanFasumLampu_Jalan_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasosdanFasumLampu_Jalan_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasosdanFasumLampu_Jalan_12.addFeatures(features_FasosdanFasumLampu_Jalan_12);
var lyr_FasosdanFasumLampu_Jalan_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasosdanFasumLampu_Jalan_12, 
                style: style_FasosdanFasumLampu_Jalan_12,
                popuplayertitle: 'Fasos dan Fasum — Lampu_Jalan',
                interactive: true,
                title: '<img src="styles/legend/FasosdanFasumLampu_Jalan_12.png" /> Fasos dan Fasum — Lampu_Jalan'
            });
var format_FasosdanFasumJalan_13 = new ol.format.GeoJSON();
var features_FasosdanFasumJalan_13 = format_FasosdanFasumJalan_13.readFeatures(json_FasosdanFasumJalan_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasosdanFasumJalan_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasosdanFasumJalan_13.addFeatures(features_FasosdanFasumJalan_13);
var lyr_FasosdanFasumJalan_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasosdanFasumJalan_13, 
                style: style_FasosdanFasumJalan_13,
                popuplayertitle: 'Fasos dan Fasum — Jalan',
                interactive: true,
                title: '<img src="styles/legend/FasosdanFasumJalan_13.png" /> Fasos dan Fasum — Jalan'
            });
var format_FasosdanFasumFasilitas_Pendidikan_14 = new ol.format.GeoJSON();
var features_FasosdanFasumFasilitas_Pendidikan_14 = format_FasosdanFasumFasilitas_Pendidikan_14.readFeatures(json_FasosdanFasumFasilitas_Pendidikan_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasosdanFasumFasilitas_Pendidikan_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasosdanFasumFasilitas_Pendidikan_14.addFeatures(features_FasosdanFasumFasilitas_Pendidikan_14);
var lyr_FasosdanFasumFasilitas_Pendidikan_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasosdanFasumFasilitas_Pendidikan_14, 
                style: style_FasosdanFasumFasilitas_Pendidikan_14,
                popuplayertitle: 'Fasos dan Fasum — Fasilitas_Pendidikan',
                interactive: true,
                title: '<img src="styles/legend/FasosdanFasumFasilitas_Pendidikan_14.png" /> Fasos dan Fasum — Fasilitas_Pendidikan'
            });
var format_FasosdanFasumFasilitas_Kesehatan_15 = new ol.format.GeoJSON();
var features_FasosdanFasumFasilitas_Kesehatan_15 = format_FasosdanFasumFasilitas_Kesehatan_15.readFeatures(json_FasosdanFasumFasilitas_Kesehatan_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasosdanFasumFasilitas_Kesehatan_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasosdanFasumFasilitas_Kesehatan_15.addFeatures(features_FasosdanFasumFasilitas_Kesehatan_15);
var lyr_FasosdanFasumFasilitas_Kesehatan_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasosdanFasumFasilitas_Kesehatan_15, 
                style: style_FasosdanFasumFasilitas_Kesehatan_15,
                popuplayertitle: 'Fasos dan Fasum — Fasilitas_Kesehatan',
                interactive: true,
                title: '<img src="styles/legend/FasosdanFasumFasilitas_Kesehatan_15.png" /> Fasos dan Fasum — Fasilitas_Kesehatan'
            });
var format_FasosdanFasumFasilitas_Ibadah_16 = new ol.format.GeoJSON();
var features_FasosdanFasumFasilitas_Ibadah_16 = format_FasosdanFasumFasilitas_Ibadah_16.readFeatures(json_FasosdanFasumFasilitas_Ibadah_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasosdanFasumFasilitas_Ibadah_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasosdanFasumFasilitas_Ibadah_16.addFeatures(features_FasosdanFasumFasilitas_Ibadah_16);
var lyr_FasosdanFasumFasilitas_Ibadah_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasosdanFasumFasilitas_Ibadah_16, 
                style: style_FasosdanFasumFasilitas_Ibadah_16,
                popuplayertitle: 'Fasos dan Fasum — Fasilitas_Ibadah',
                interactive: true,
                title: '<img src="styles/legend/FasosdanFasumFasilitas_Ibadah_16.png" /> Fasos dan Fasum — Fasilitas_Ibadah'
            });
var format_FasosdanFasumBalai_Pertemuan_17 = new ol.format.GeoJSON();
var features_FasosdanFasumBalai_Pertemuan_17 = format_FasosdanFasumBalai_Pertemuan_17.readFeatures(json_FasosdanFasumBalai_Pertemuan_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasosdanFasumBalai_Pertemuan_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasosdanFasumBalai_Pertemuan_17.addFeatures(features_FasosdanFasumBalai_Pertemuan_17);
var lyr_FasosdanFasumBalai_Pertemuan_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasosdanFasumBalai_Pertemuan_17, 
                style: style_FasosdanFasumBalai_Pertemuan_17,
                popuplayertitle: 'Fasos dan Fasum — Balai_Pertemuan',
                interactive: true,
                title: '<img src="styles/legend/FasosdanFasumBalai_Pertemuan_17.png" /> Fasos dan Fasum — Balai_Pertemuan'
            });

lyr_BasemapGoogleEarth_0.setVisible(true);lyr_FasosdanFasumTiang_Listrik_1.setVisible(true);lyr_FasosdanFasumSosial_dan_Kesejahteraan_2.setVisible(true);lyr_FasosdanFasumRekreasi_3.setVisible(true);lyr_FasosdanFasumMultiple_Buffer_Sosial_dan_Kesejahteraan_4.setVisible(true);lyr_FasosdanFasumMultiple_Buffer_Rekreasi_5.setVisible(true);lyr_FasosdanFasumMultiple_Buffer_Layanan_Transportasi_6.setVisible(true);lyr_FasosdanFasumMultiple_Buffer_Fasilitas_Pendidikan_7.setVisible(true);lyr_FasosdanFasumMultiple_Buffer_Fasilitas_Kesehatan_8.setVisible(true);lyr_FasosdanFasumMultiple_Buffer_Fasilitas_Ibadah_9.setVisible(true);lyr_FasosdanFasumMultiple_Buffer_Balai_Pertemuan_10.setVisible(true);lyr_FasosdanFasumLayanan_Transportasi_11.setVisible(true);lyr_FasosdanFasumLampu_Jalan_12.setVisible(true);lyr_FasosdanFasumJalan_13.setVisible(true);lyr_FasosdanFasumFasilitas_Pendidikan_14.setVisible(true);lyr_FasosdanFasumFasilitas_Kesehatan_15.setVisible(true);lyr_FasosdanFasumFasilitas_Ibadah_16.setVisible(true);lyr_FasosdanFasumBalai_Pertemuan_17.setVisible(true);
var layersList = [lyr_BasemapGoogleEarth_0,lyr_FasosdanFasumTiang_Listrik_1,lyr_FasosdanFasumSosial_dan_Kesejahteraan_2,lyr_FasosdanFasumRekreasi_3,lyr_FasosdanFasumMultiple_Buffer_Sosial_dan_Kesejahteraan_4,lyr_FasosdanFasumMultiple_Buffer_Rekreasi_5,lyr_FasosdanFasumMultiple_Buffer_Layanan_Transportasi_6,lyr_FasosdanFasumMultiple_Buffer_Fasilitas_Pendidikan_7,lyr_FasosdanFasumMultiple_Buffer_Fasilitas_Kesehatan_8,lyr_FasosdanFasumMultiple_Buffer_Fasilitas_Ibadah_9,lyr_FasosdanFasumMultiple_Buffer_Balai_Pertemuan_10,lyr_FasosdanFasumLayanan_Transportasi_11,lyr_FasosdanFasumLampu_Jalan_12,lyr_FasosdanFasumJalan_13,lyr_FasosdanFasumFasilitas_Pendidikan_14,lyr_FasosdanFasumFasilitas_Kesehatan_15,lyr_FasosdanFasumFasilitas_Ibadah_16,lyr_FasosdanFasumBalai_Pertemuan_17];
lyr_FasosdanFasumTiang_Listrik_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Nama_Fasum': 'Nama_Fasum', 'X': 'X', 'Y': 'Y', });
lyr_FasosdanFasumSosial_dan_Kesejahteraan_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Nama_Fasos': 'Nama_Fasos', 'X': 'X', 'Y': 'Y', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_FasosdanFasumRekreasi_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Nama_Fasos': 'Nama_Fasos', 'X': 'X', 'Y': 'Y', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_FasosdanFasumMultiple_Buffer_Sosial_dan_Kesejahteraan_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'distance': 'distance', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_FasosdanFasumMultiple_Buffer_Rekreasi_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'distance': 'distance', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_FasosdanFasumMultiple_Buffer_Layanan_Transportasi_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'distance': 'distance', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_FasosdanFasumMultiple_Buffer_Fasilitas_Pendidikan_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'distance': 'distance', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_FasosdanFasumMultiple_Buffer_Fasilitas_Kesehatan_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'distance': 'distance', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_FasosdanFasumMultiple_Buffer_Fasilitas_Ibadah_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'distance': 'distance', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_FasosdanFasumMultiple_Buffer_Balai_Pertemuan_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'distance': 'distance', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_FasosdanFasumLayanan_Transportasi_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Nama_Fasos': 'Nama_Fasos', 'X': 'X', 'Y': 'Y', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_FasosdanFasumLampu_Jalan_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Nama_fasum': 'Nama_fasum', 'X': 'X', 'Y': 'Y', });
lyr_FasosdanFasumJalan_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'traffic_si': 'traffic_si', 'traffic__1': 'traffic__1', 'crossing_i': 'crossing_i', 'button_ope': 'button_ope', 'barrier': 'barrier', 'proposed': 'proposed', 'informal': 'informal', 'ramp': 'ramp', 'level': 'level', 'oneway_con': 'oneway_con', 'sidewalk_r': 'sidewalk_r', 'sidewalk_l': 'sidewalk_l', 'ford': 'ford', 'crossing_m': 'crossing_m', 'crossing': 'crossing', 'lit': 'lit', 'email': 'email', 'bike_ride': 'bike_ride', 'name_id': 'name_id', 'operator_t': 'operator_t', 'operator': 'operator', 'capacity': 'capacity', 'descriptio': 'descriptio', 'aeroway': 'aeroway', 'embankment': 'embankment', 'flood_pron': 'flood_pron', 'width': 'width', 'maxspeed_a': 'maxspeed_a', 'maxheight': 'maxheight', 'constructi': 'constructi', 'footway': 'footway', 'public_tra': 'public_tra', 'oneway_mot': 'oneway_mot', 'man_made': 'man_made', 'incline': 'incline', 'cycleway': 'cycleway', 'postal_cod': 'postal_cod', 'key': 'key', 'addr_count': 'addr_count', 'addr_city': 'addr_city', 'maxweight_': 'maxweight_', 'garmin_typ': 'garmin_typ', 'motor_vehi': 'motor_vehi', 'roundabout': 'roundabout', 'wikidata': 'wikidata', 'tunnel': 'tunnel', 'name_en': 'name_en', 'import': 'import', 'tracktype': 'tracktype', 'name_ja': 'name_ja', 'parking_la': 'parking_la', 'bridge_str': 'bridge_str', 'covered': 'covered', 'check_date': 'check_date', 'junction': 'junction', 'service': 'service', 'sidewalk': 'sidewalk', 'bridge_nam': 'bridge_nam', 'horse': 'horse', 'alt_name': 'alt_name', 'lane_marki': 'lane_marki', 'moped': 'moped', 'mofa': 'mofa', 'ref': 'ref', 'lanes': 'lanes', 'layer': 'layer', 'bridge': 'bridge', 'smoothness': 'smoothness', 'surface': 'surface', 'maxspeed': 'maxspeed', 'motorcycle': 'motorcycle', 'motor_ve_1': 'motor_ve_1', 'destinatio': 'destinatio', 'taxi': 'taxi', 'psv': 'psv', 'motorcar': 'motorcar', 'hgv': 'hgv', 'goods': 'goods', 'foot': 'foot', 'emergency': 'emergency', 'bicycle': 'bicycle', 'catmp_Road': 'catmp_Road', 'sport': 'sport', 'access': 'access', 'oneway': 'oneway', 'name': 'name', 'Shape_Length': 'Shape_Length', });
lyr_FasosdanFasumFasilitas_Pendidikan_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Nama_Sekol': 'Nama_Sekol', 'X': 'X', 'Y': 'Y', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_FasosdanFasumFasilitas_Kesehatan_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Nama_Fasos': 'Nama_Fasos', 'X': 'X', 'Y': 'Y', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_FasosdanFasumFasilitas_Ibadah_16.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Nama_Fasos': 'Nama_Fasos', 'X': 'X', 'Y': 'Y', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_FasosdanFasumBalai_Pertemuan_17.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Nama_Fasos': 'Nama_Fasos', 'X': 'X', 'Y': 'Y', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_FasosdanFasumTiang_Listrik_1.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Nama_Fasum': '', 'X': '', 'Y': '', });
lyr_FasosdanFasumSosial_dan_Kesejahteraan_2.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Nama_Fasos': '', 'X': '', 'Y': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_FasosdanFasumRekreasi_3.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Nama_Fasos': '', 'X': '', 'Y': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_FasosdanFasumMultiple_Buffer_Sosial_dan_Kesejahteraan_4.set('fieldImages', {'OBJECTID': '', 'distance': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_FasosdanFasumMultiple_Buffer_Rekreasi_5.set('fieldImages', {'OBJECTID': '', 'distance': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_FasosdanFasumMultiple_Buffer_Layanan_Transportasi_6.set('fieldImages', {'OBJECTID': '', 'distance': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_FasosdanFasumMultiple_Buffer_Fasilitas_Pendidikan_7.set('fieldImages', {'OBJECTID': '', 'distance': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_FasosdanFasumMultiple_Buffer_Fasilitas_Kesehatan_8.set('fieldImages', {'OBJECTID': '', 'distance': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_FasosdanFasumMultiple_Buffer_Fasilitas_Ibadah_9.set('fieldImages', {'OBJECTID': '', 'distance': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_FasosdanFasumMultiple_Buffer_Balai_Pertemuan_10.set('fieldImages', {'OBJECTID': '', 'distance': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_FasosdanFasumLayanan_Transportasi_11.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Nama_Fasos': '', 'X': '', 'Y': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_FasosdanFasumLampu_Jalan_12.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Nama_fasum': '', 'X': '', 'Y': '', });
lyr_FasosdanFasumJalan_13.set('fieldImages', {'OBJECTID': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'traffic_si': '', 'traffic__1': '', 'crossing_i': '', 'button_ope': '', 'barrier': '', 'proposed': '', 'informal': '', 'ramp': '', 'level': '', 'oneway_con': '', 'sidewalk_r': '', 'sidewalk_l': '', 'ford': '', 'crossing_m': '', 'crossing': '', 'lit': '', 'email': '', 'bike_ride': '', 'name_id': '', 'operator_t': '', 'operator': '', 'capacity': '', 'descriptio': '', 'aeroway': '', 'embankment': '', 'flood_pron': '', 'width': '', 'maxspeed_a': '', 'maxheight': '', 'constructi': '', 'footway': '', 'public_tra': '', 'oneway_mot': '', 'man_made': '', 'incline': '', 'cycleway': '', 'postal_cod': '', 'key': '', 'addr_count': '', 'addr_city': '', 'maxweight_': '', 'garmin_typ': '', 'motor_vehi': '', 'roundabout': '', 'wikidata': '', 'tunnel': '', 'name_en': '', 'import': '', 'tracktype': '', 'name_ja': '', 'parking_la': '', 'bridge_str': '', 'covered': '', 'check_date': '', 'junction': '', 'service': '', 'sidewalk': '', 'bridge_nam': '', 'horse': '', 'alt_name': '', 'lane_marki': '', 'moped': '', 'mofa': '', 'ref': '', 'lanes': '', 'layer': '', 'bridge': '', 'smoothness': '', 'surface': '', 'maxspeed': '', 'motorcycle': '', 'motor_ve_1': '', 'destinatio': '', 'taxi': '', 'psv': '', 'motorcar': '', 'hgv': '', 'goods': '', 'foot': '', 'emergency': '', 'bicycle': '', 'catmp_Road': '', 'sport': '', 'access': '', 'oneway': '', 'name': '', 'Shape_Length': '', });
lyr_FasosdanFasumFasilitas_Pendidikan_14.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Nama_Sekol': '', 'X': '', 'Y': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_FasosdanFasumFasilitas_Kesehatan_15.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Nama_Fasos': '', 'X': '', 'Y': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_FasosdanFasumFasilitas_Ibadah_16.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Nama_Fasos': '', 'X': '', 'Y': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_FasosdanFasumBalai_Pertemuan_17.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Nama_Fasos': '', 'X': '', 'Y': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_FasosdanFasumTiang_Listrik_1.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Nama_Fasum': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_FasosdanFasumSosial_dan_Kesejahteraan_2.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Nama_Fasos': 'no label', 'X': 'no label', 'Y': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_FasosdanFasumRekreasi_3.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Nama_Fasos': 'no label', 'X': 'no label', 'Y': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_FasosdanFasumMultiple_Buffer_Sosial_dan_Kesejahteraan_4.set('fieldLabels', {'OBJECTID': 'no label', 'distance': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_FasosdanFasumMultiple_Buffer_Rekreasi_5.set('fieldLabels', {'OBJECTID': 'no label', 'distance': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_FasosdanFasumMultiple_Buffer_Layanan_Transportasi_6.set('fieldLabels', {'OBJECTID': 'no label', 'distance': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_FasosdanFasumMultiple_Buffer_Fasilitas_Pendidikan_7.set('fieldLabels', {'OBJECTID': 'no label', 'distance': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_FasosdanFasumMultiple_Buffer_Fasilitas_Kesehatan_8.set('fieldLabels', {'OBJECTID': 'no label', 'distance': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_FasosdanFasumMultiple_Buffer_Fasilitas_Ibadah_9.set('fieldLabels', {'OBJECTID': 'no label', 'distance': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_FasosdanFasumMultiple_Buffer_Balai_Pertemuan_10.set('fieldLabels', {'OBJECTID': 'no label', 'distance': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_FasosdanFasumLayanan_Transportasi_11.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Nama_Fasos': 'no label', 'X': 'no label', 'Y': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_FasosdanFasumLampu_Jalan_12.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Nama_fasum': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_FasosdanFasumJalan_13.set('fieldLabels', {'OBJECTID': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'traffic_si': 'no label', 'traffic__1': 'no label', 'crossing_i': 'no label', 'button_ope': 'no label', 'barrier': 'no label', 'proposed': 'no label', 'informal': 'no label', 'ramp': 'no label', 'level': 'no label', 'oneway_con': 'no label', 'sidewalk_r': 'no label', 'sidewalk_l': 'no label', 'ford': 'no label', 'crossing_m': 'no label', 'crossing': 'no label', 'lit': 'no label', 'email': 'no label', 'bike_ride': 'no label', 'name_id': 'no label', 'operator_t': 'no label', 'operator': 'no label', 'capacity': 'no label', 'descriptio': 'no label', 'aeroway': 'no label', 'embankment': 'no label', 'flood_pron': 'no label', 'width': 'no label', 'maxspeed_a': 'no label', 'maxheight': 'no label', 'constructi': 'no label', 'footway': 'no label', 'public_tra': 'no label', 'oneway_mot': 'no label', 'man_made': 'no label', 'incline': 'no label', 'cycleway': 'no label', 'postal_cod': 'no label', 'key': 'no label', 'addr_count': 'no label', 'addr_city': 'no label', 'maxweight_': 'no label', 'garmin_typ': 'no label', 'motor_vehi': 'no label', 'roundabout': 'no label', 'wikidata': 'no label', 'tunnel': 'no label', 'name_en': 'no label', 'import': 'no label', 'tracktype': 'no label', 'name_ja': 'no label', 'parking_la': 'no label', 'bridge_str': 'no label', 'covered': 'no label', 'check_date': 'no label', 'junction': 'no label', 'service': 'no label', 'sidewalk': 'no label', 'bridge_nam': 'no label', 'horse': 'no label', 'alt_name': 'no label', 'lane_marki': 'no label', 'moped': 'no label', 'mofa': 'no label', 'ref': 'no label', 'lanes': 'no label', 'layer': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'surface': 'no label', 'maxspeed': 'no label', 'motorcycle': 'no label', 'motor_ve_1': 'no label', 'destinatio': 'no label', 'taxi': 'no label', 'psv': 'no label', 'motorcar': 'no label', 'hgv': 'no label', 'goods': 'no label', 'foot': 'no label', 'emergency': 'no label', 'bicycle': 'no label', 'catmp_Road': 'no label', 'sport': 'no label', 'access': 'no label', 'oneway': 'no label', 'name': 'no label', 'Shape_Length': 'no label', });
lyr_FasosdanFasumFasilitas_Pendidikan_14.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Nama_Sekol': 'no label', 'X': 'no label', 'Y': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_FasosdanFasumFasilitas_Kesehatan_15.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Nama_Fasos': 'no label', 'X': 'no label', 'Y': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_FasosdanFasumFasilitas_Ibadah_16.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Nama_Fasos': 'no label', 'X': 'no label', 'Y': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_FasosdanFasumBalai_Pertemuan_17.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Nama_Fasos': 'no label', 'X': 'no label', 'Y': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_FasosdanFasumBalai_Pertemuan_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});