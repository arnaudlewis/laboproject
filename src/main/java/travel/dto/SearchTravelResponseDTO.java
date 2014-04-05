package travel.dto;

import travel.Travel;

import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.xml.bind.annotation.XmlType;
import java.util.List;

/**
 * Created by oliver on 04/04/14.
 */
@XmlType(name = "SearchTravelResponseDTO")
@Produces(MediaType.APPLICATION_JSON)
public class SearchTravelResponseDTO {


    private List<Travel> searchResultsList;

    public SearchTravelResponseDTO() {
    }

    public List<Travel> getSearchResultsList() {
        return searchResultsList;
    }

    public void setSearchResultsList(List<Travel> searchResultsList) {
        this.searchResultsList = searchResultsList;
    }

}
