package user.dto;

import javax.ws.rs.Consumes;
import javax.ws.rs.core.MediaType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

/**
 * Created by oliver on 02/04/14.
 */
@XmlType(name = "CreateProfileRequestDTO")
@Consumes(MediaType.APPLICATION_JSON)
public class CreateProfileRequestDTO {

    // données relatives au profil
    @XmlElement(name = "sex")
    private boolean sex; // TRUE female, FALSE male
    @XmlElement(name = "hobby")
    private String hobby;
    @XmlElement(name = "music")
    private String music;
    @XmlElement(name = "animal")
    private boolean animal;
    @XmlElement(name = "smoke")
    private boolean smoke;
    @XmlElement(name = "moreInfo")
    private String moreInfo;

    public CreateProfileRequestDTO() {

    }

    public boolean isSex() {
        return sex;
    }

    public void setSex(boolean sex) {
        this.sex = sex;
    }

    public String getHobby() {
        return hobby;
    }

    public void setHobby(String hobby) {
        this.hobby = hobby;
    }

    public String getMusic() {
        return music;
    }

    public void setMusic(String music) {
        this.music = music;
    }

    public boolean isAnimal() {
        return animal;
    }

    public void setAnimal(boolean animal) {
        this.animal = animal;
    }

    public boolean isSmoke() {
        return smoke;
    }

    public void setSmoke(boolean smoke) {
        this.smoke = smoke;
    }

    public String getMoreInfo() {
        return moreInfo;
    }

    public void setMoreInfo(String moreInfo) {
        this.moreInfo = moreInfo;
    }

}


