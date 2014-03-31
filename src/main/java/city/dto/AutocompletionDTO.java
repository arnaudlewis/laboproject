package city.dto;

import javax.ws.rs.Consumes;
import javax.ws.rs.core.MediaType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

@XmlType(name = "AutocompleteDTO")
@Consumes(MediaType.APPLICATION_JSON)
public class AutocompletionDTO {

    @XmlElement(name="searchParam")
    private String searchParam;

    public AutocompletionDTO() {
    }

    public String getSearchParam() {
        return searchParam;
    }

    public void setSearchParam(String searchParam) {
        this.searchParam = searchParam;
    }
}
