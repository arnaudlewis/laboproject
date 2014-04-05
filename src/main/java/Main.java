import user.User;
import user.dataAccess.DaoUser;

public class Main {

    public static void main(String[] args) {
        DaoUser.getInstance().insert(new User());
    }

}
