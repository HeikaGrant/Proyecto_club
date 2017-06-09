package com.webService;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.json.JSONException;
import org.json.JSONObject;

@Path("/UlacitService")
public class UlacitServices {
	
	
	
	@GET
	@Path("/checkLogin")
	@Produces(MediaType.APPLICATION_JSON)
	public Response  checkLogin() throws JSONException {
		
		JSONObject jsonObject = new JSONObject();

		

		 

		String result = "@Produces(\"application/json\") Output: \n\nF to C Converter Output: \n\n" + jsonObject;

		return Response.status(200).entity(result).build();
		
		
		
		
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	

}
