var wms_layers = [];


        var lyr_BingMap_0 = new ol.layer.Tile({
            'title': 'Bing Map',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://ecn.dynamic.t0.tiles.virtualearth.net/comp/CompositionHandler/{q}?mkt=en-us&it=G,VE,BX,L,LA&shading=hill'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_LmitedeSuiza_2 = new ol.format.GeoJSON();
var features_LmitedeSuiza_2 = format_LmitedeSuiza_2.readFeatures(json_LmitedeSuiza_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LmitedeSuiza_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LmitedeSuiza_2.addFeatures(features_LmitedeSuiza_2);
var lyr_LmitedeSuiza_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LmitedeSuiza_2, 
                style: style_LmitedeSuiza_2,
                popuplayertitle: 'Límite de Suiza',
                interactive: true,
                title: '<img src="styles/legend/LmitedeSuiza_2.png" /> Límite de Suiza'
            });
var format_Cuerposdeagua_3 = new ol.format.GeoJSON();
var features_Cuerposdeagua_3 = format_Cuerposdeagua_3.readFeatures(json_Cuerposdeagua_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cuerposdeagua_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cuerposdeagua_3.addFeatures(features_Cuerposdeagua_3);
var lyr_Cuerposdeagua_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cuerposdeagua_3, 
                style: style_Cuerposdeagua_3,
                popuplayertitle: 'Cuerpos de agua',
                interactive: true,
                title: '<img src="styles/legend/Cuerposdeagua_3.png" /> Cuerpos de agua'
            });
var format_Rutas_4 = new ol.format.GeoJSON();
var features_Rutas_4 = format_Rutas_4.readFeatures(json_Rutas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rutas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rutas_4.addFeatures(features_Rutas_4);
var lyr_Rutas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rutas_4, 
                style: style_Rutas_4,
                popuplayertitle: 'Rutas',
                interactive: true,
                title: '<img src="styles/legend/Rutas_4.png" /> Rutas'
            });
var format_Ferrocarriles_5 = new ol.format.GeoJSON();
var features_Ferrocarriles_5 = format_Ferrocarriles_5.readFeatures(json_Ferrocarriles_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ferrocarriles_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ferrocarriles_5.addFeatures(features_Ferrocarriles_5);
var lyr_Ferrocarriles_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ferrocarriles_5, 
                style: style_Ferrocarriles_5,
                popuplayertitle: 'Ferrocarriles',
                interactive: true,
                title: '<img src="styles/legend/Ferrocarriles_5.png" /> Ferrocarriles'
            });
var format_BernaCapitalSuiza_6 = new ol.format.GeoJSON();
var features_BernaCapitalSuiza_6 = format_BernaCapitalSuiza_6.readFeatures(json_BernaCapitalSuiza_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BernaCapitalSuiza_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BernaCapitalSuiza_6.addFeatures(features_BernaCapitalSuiza_6);
var lyr_BernaCapitalSuiza_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BernaCapitalSuiza_6, 
                style: style_BernaCapitalSuiza_6,
                popuplayertitle: 'Berna Capital Suiza',
                interactive: true,
                title: '<img src="styles/legend/BernaCapitalSuiza_6.png" /> Berna Capital Suiza'
            });

lyr_BingMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_LmitedeSuiza_2.setVisible(true);lyr_Cuerposdeagua_3.setVisible(true);lyr_Rutas_4.setVisible(true);lyr_Ferrocarriles_5.setVisible(true);lyr_BernaCapitalSuiza_6.setVisible(true);
var layersList = [lyr_BingMap_0,lyr_GoogleSatellite_1,lyr_LmitedeSuiza_2,lyr_Cuerposdeagua_3,lyr_Rutas_4,lyr_Ferrocarriles_5,lyr_BernaCapitalSuiza_6];
lyr_LmitedeSuiza_2.set('fieldAliases', {'id': 'id', 'uuid': 'uuid', 'datum_aenderung': 'datum_aenderung', 'datum_erstellung': 'datum_erstellung', 'erstellung_jahr': 'erstellung_jahr', 'erstellung_monat': 'erstellung_monat', 'grund_aenderung': 'grund_aenderung', 'herkunft': 'herkunft', 'herkunft_jahr': 'herkunft_jahr', 'herkunft_monat': 'herkunft_monat', 'revision_jahr': 'revision_jahr', 'revision_monat': 'revision_monat', 'revision_qualitaet': 'revision_qualitaet', 'objektart': 'objektart', 'see_flaeche': 'see_flaeche', 'landesflaeche': 'landesflaeche', 'name': 'Nombre', 'icc': 'icc', 'einwohnerzahl': 'einwohnerzahl', });
lyr_Cuerposdeagua_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'DKM_UUID': 'DKM_UUID', 'NAME': 'Nombre', 'NAME_LANG': 'Nombre e idioma', 'GROESSTE_S': 'Categoría de tamaño', 'SEESPIEGEL': 'Altitud del espejo de agua', 'SG': 'Categoría de tamaño', 'INVERT': 'INVERT', 'RID': 'RID', 'OBJEKTART': 'Tipo de objeto', 'SHAPELENGT': 'SHAPELENGT', 'SHAPEAREA': 'SHAPEAREA', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Rutas_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'DKM_UUID': 'DKM_UUID', 'ROUTEN_NR': 'Número de ruta', 'EROEFFNUNG': 'EROEFFNUNG', 'LB': 'LB', 'FB': 'FB', 'FBP': 'FBP', 'CUT_BEGIN': 'CUT_BEGIN', 'CUT_END': 'CUT_END', 'CUT_FB_BEG': 'CUT_FB_BEG', 'CUT_FB_END': 'CUT_FB_END', 'STUFE': 'STUFE', 'KUNSTBAUTE': 'Tipo de estructura', 'BELAGSART': 'Tipo de pavimento', 'GETRENNT': 'GETRENNT', 'IM_BAU': 'En construcción', 'VERFUEGBAR': 'VERFUEGBAR', 'VRKBEDEUT': 'Importancia vial ', 'CAP_STYLE': 'CAP_STYLE', 'EXTR_TYPE': 'EXTR_TYPE', 'INVERT': 'INVERT', 'RID': 'RID', 'OBJEKTART': 'Tipo de vía', 'SHAPELENGT': 'SHAPELENGT', 'SHAPE_Length': 'SHAPE_Length', });
lyr_Ferrocarriles_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'DKM_UUID': 'DKM_UUID', 'EROEFFNUNG': 'EROEFFNUNG', 'LB': 'LB', 'CUT_BEGIN': 'CUT_BEGIN', 'CUT_END': 'CUT_END', 'STUFE': 'Nivel', 'KUNSTBAUTE': 'Tipo de estructura', 'ANZ_SPUR': 'ANZ_SPUR', 'IM_BAU': 'En construcción', 'CAP_STYLE': 'CAP_STYLE', 'EXTR_TYPE': 'EXTR_TYPE', 'INVERT': 'INVERT', 'RID': 'RID', 'OBJEKTART': 'Tipo de ferrocarril', 'SHAPELENGT': 'SHAPELENGT', 'SHAPE_Length': 'SHAPE_Length', });
lyr_BernaCapitalSuiza_6.set('fieldAliases', {'fid': 'fid', 'bfs_nummer': 'Código BFS', 'ciudad': 'Ciudad', 'poblacion': 'Población', });
lyr_LmitedeSuiza_2.set('fieldImages', {'id': 'Hidden', 'uuid': 'Hidden', 'datum_aenderung': 'Hidden', 'datum_erstellung': 'Hidden', 'erstellung_jahr': 'Hidden', 'erstellung_monat': 'Hidden', 'grund_aenderung': 'Hidden', 'herkunft': 'Hidden', 'herkunft_jahr': 'Hidden', 'herkunft_monat': 'Hidden', 'revision_jahr': 'Hidden', 'revision_monat': 'Hidden', 'revision_qualitaet': 'Hidden', 'objektart': 'Hidden', 'see_flaeche': 'Hidden', 'landesflaeche': 'Hidden', 'name': 'TextEdit', 'icc': 'Hidden', 'einwohnerzahl': 'Hidden', });
lyr_Cuerposdeagua_3.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'Hidden', 'DKM_UUID': 'Hidden', 'NAME': 'TextEdit', 'NAME_LANG': 'TextEdit', 'GROESSTE_S': 'Range', 'SEESPIEGEL': 'Range', 'SG': 'TextEdit', 'INVERT': 'Hidden', 'RID': 'Hidden', 'OBJEKTART': 'TextEdit', 'SHAPELENGT': 'Hidden', 'SHAPEAREA': 'Hidden', 'SHAPE_Length': 'Hidden', 'SHAPE_Area': 'Hidden', });
lyr_Rutas_4.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'Hidden', 'DKM_UUID': 'Hidden', 'ROUTEN_NR': 'TextEdit', 'EROEFFNUNG': 'Hidden', 'LB': 'Hidden', 'FB': 'Hidden', 'FBP': 'Hidden', 'CUT_BEGIN': 'Hidden', 'CUT_END': 'Hidden', 'CUT_FB_BEG': 'Hidden', 'CUT_FB_END': 'Hidden', 'STUFE': 'Hidden', 'KUNSTBAUTE': 'TextEdit', 'BELAGSART': 'TextEdit', 'GETRENNT': 'Hidden', 'IM_BAU': 'TextEdit', 'VERFUEGBAR': 'Hidden', 'VRKBEDEUT': 'TextEdit', 'CAP_STYLE': 'Hidden', 'EXTR_TYPE': 'Hidden', 'INVERT': 'Hidden', 'RID': 'Hidden', 'OBJEKTART': 'TextEdit', 'SHAPELENGT': 'Hidden', 'SHAPE_Length': 'Hidden', });
lyr_Ferrocarriles_5.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'Hidden', 'DKM_UUID': 'Hidden', 'EROEFFNUNG': 'Hidden', 'LB': 'Hidden', 'CUT_BEGIN': 'Hidden', 'CUT_END': 'Hidden', 'STUFE': 'TextEdit', 'KUNSTBAUTE': 'TextEdit', 'ANZ_SPUR': 'Hidden', 'IM_BAU': 'TextEdit', 'CAP_STYLE': 'Hidden', 'EXTR_TYPE': 'Hidden', 'INVERT': 'Hidden', 'RID': 'Hidden', 'OBJEKTART': 'TextEdit', 'SHAPELENGT': 'Hidden', 'SHAPE_Length': 'Hidden', });
lyr_BernaCapitalSuiza_6.set('fieldImages', {'fid': 'Hidden', 'bfs_nummer': 'TextEdit', 'ciudad': 'TextEdit', 'poblacion': 'Range', });
lyr_LmitedeSuiza_2.set('fieldLabels', {'name': 'no label', });
lyr_Cuerposdeagua_3.set('fieldLabels', {'NAME': 'inline label - always visible', 'NAME_LANG': 'inline label - always visible', 'GROESSTE_S': 'inline label - always visible', 'SEESPIEGEL': 'inline label - always visible', 'SG': 'inline label - always visible', 'OBJEKTART': 'inline label - always visible', });
lyr_Rutas_4.set('fieldLabels', {'ROUTEN_NR': 'inline label - always visible', 'KUNSTBAUTE': 'inline label - always visible', 'BELAGSART': 'inline label - always visible', 'IM_BAU': 'inline label - always visible', 'VRKBEDEUT': 'inline label - always visible', 'OBJEKTART': 'inline label - always visible', });
lyr_Ferrocarriles_5.set('fieldLabels', {'STUFE': 'inline label - always visible', 'KUNSTBAUTE': 'inline label - always visible', 'IM_BAU': 'inline label - always visible', 'OBJEKTART': 'inline label - always visible', });
lyr_BernaCapitalSuiza_6.set('fieldLabels', {'bfs_nummer': 'inline label - always visible', 'ciudad': 'inline label - always visible', 'poblacion': 'inline label - always visible', });
lyr_BernaCapitalSuiza_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});