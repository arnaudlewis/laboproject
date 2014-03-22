import user.User;
import user.dataAccess.DaoUser;

public class Main {

    public static void main(String[] args) {
        User test = DaoUser.getInstance().authentication("arnaud", "arnaud");
        System.out.println(test.getFirstname());
    }

}
