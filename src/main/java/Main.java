import city.City;
import city.dataAccess.DaoCity;
import user.User;
import user.dataAccess.DaoUser;

public class Main {

    public static void main(String[] args) {
        DaoCity.getInstance().insert(new City());
    }

}
