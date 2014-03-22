package journey.dto;

import journey.Journey;

import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;
import java.util.List;

/**
 * Created by oliver on 09/03/14.
 */
@XmlType(name = "SearchJourneyResponseDTO")
@Produces(MediaType.APPLICATION_JSON)
public class SearchJourneyResponseDTO {

    @XmlElement(name = "list_journey")
    private List<Journey> list_journey;

    public SearchJourneyResponseDTO() {

    }

    public List<Journey> getList_journey() {
        return list_journey;
    }

    public void setList_journey(List<Journey> list_journey) {
        this.list_journey = list_journey;
    }
}
