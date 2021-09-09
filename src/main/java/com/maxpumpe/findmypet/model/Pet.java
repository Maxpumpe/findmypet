package com.maxpumpe.findmypet.model;

import java.io.Serializable;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.google.gson.Gson;
import com.mapbox.geojson.BoundingBox;
import com.mapbox.geojson.Feature;
import com.mapbox.geojson.FeatureCollection;
import com.mapbox.geojson.Point;


@Table(name = "Pets")
@Entity
@JsonFormat(with = JsonFormat.Feature.ACCEPT_CASE_INSENSITIVE_PROPERTIES)
public class Pet implements Serializable  {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue
	private Integer id;
	
	@Column(length = 40)
	private String title;
	
	
	private String message;
	
	private String imgUrl;
	
	@Column( nullable = false, updatable = false)
	@CreationTimestamp
	Date createDate;
	
	@NotNull
	private Double coordinates_Point_Lat;
	@NotNull
	private Double coordinates_Point_Lng;
	//@NotNull is buggy so deactive this
	private Long userOwner;

	public Pet() {}
	
	public Pet(String title,  String message, String imgUrl, double coordinates_Point_Lat, double coordinates_Point_Lng, Long userOwner) {
		this.title = title;
		this.message = message;
		this.imgUrl = imgUrl;
		this.coordinates_Point_Lat = coordinates_Point_Lat;
		this.coordinates_Point_Lng = coordinates_Point_Lng;
	    this.userOwner = userOwner;
	}

	public JSONObject getJson_test() { 
		JSONObject featureCollection = new JSONObject();
		featureCollection.put("type", "FeatureCollection");
		JSONObject properties = new JSONObject();
		properties.put("name", "ESPG:4326");
		JSONObject crs = new JSONObject();
		crs.put("type", "name");
		crs.put("properties", properties);
		featureCollection.put("crs", crs);

		JSONArray features = new JSONArray();
		JSONObject feature = new JSONObject();
		feature.put("type", "Feature");
		JSONObject geometry = new JSONObject();

		JSONArray JSONArrayCoord = new JSONArray();

		JSONArrayCoord.add(0, 55);
		JSONArrayCoord.add(1, 55);
		geometry.put("type", "Point");
		geometry.put("coordinates", JSONArrayCoord);
		feature.put("geometry", geometry);

		features.add(feature);
		featureCollection.put("features", features);
		return featureCollection;
	}
	
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	public Double getCoordinates_Point_Lat() {
		return coordinates_Point_Lat;
	}

	public void setCoordinates_Point_Lat(Double coordinates_Point_Lat) {
		this.coordinates_Point_Lat = coordinates_Point_Lat;
	}

	public Double getCoordinates_Point_Lng() {
		return coordinates_Point_Lng;
	}

	public void setCoordinates_Point_Lng(Double coordinates_Point_Lng) {
		this.coordinates_Point_Lng = coordinates_Point_Lng;
	}

	public Long getuserOwner() {
		return userOwner;
	}

	public void setuserOwner(Long userOwner) {
		this.userOwner = userOwner;
	}

	
	
}
// Temp Stickynote
/* What we need is ths structure
 * geojson = {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'properties': {
                        'message': 'Katze Foo entlaufen',
                        'iconSize': [60, 60]
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [13.754954, 52.240008]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'message': 'Kater Bar entlaufen',
                        'iconSize': [50, 50]
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [13.354954, 52.440008]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'message': 'Kater Baz entlaufen',
                        'iconSize': [40, 40]
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [13.254954, 52.440008]
                    }
                }
            ]
        };
 * 
 * */


