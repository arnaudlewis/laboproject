package user.dataAccess;

import common.dataAccess.Dao;
import user.User;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.persistence.TypedQuery;
import java.util.List;


public class DaoUser extends Dao<User> {


    private static final DaoUser instance = new DaoUser();

    public static DaoUser getInstance() {
        return instance;
    }

    private DaoUser() {
    }


    @Override
    public int insert(User obj) {

        EntityManager em = getEntityManagerFactory().createEntityManager();
        EntityTransaction t = em.getTransaction();

        try {
            t.begin();
            em.persist(obj);
            em.flush();
            int id = obj.getId_user();
            t.commit();
            return id;
        } catch (Exception e) {
            e.printStackTrace();
            return -1;
        } finally {
            if (t.isActive()) {
                t.rollback();
                em.close();
            }
        }

    }

    @Override
    public void update(User obj) {
        EntityManager em = getEntityManagerFactory().createEntityManager();
        EntityTransaction t = em.getTransaction();

        try {
            t.begin();
            em.merge(obj);
            t.commit();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (t.isActive()) {
                t.rollback();
                em.close();
            }
        }
    }

    /*public void updateProfile(User obj, int id_user) {
        EntityManager em = getEntityManagerFactory().createEntityManager();
        EntityTransaction t = em.getTransaction();

        try {
            t.begin();
            String sql = "UPDATE User e SET e.obj
            Query requete = em.createQuery(sql);
            t.commit();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (t.isActive()) {
                t.rollback();
                em.close();
            }
        }
    }*/

    @Override
    public void delete(User obj) {
        EntityManager em = getEntityManagerFactory().createEntityManager();
        EntityTransaction t = em.getTransaction();

        try {
            t.begin();
            em.remove(obj);
            t.commit();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (t.isActive()) {
                t.rollback();
                em.close();
            }
        }
    }

    @Override
    public User find(int id) {
        EntityManager em = getEntityManagerFactory().createEntityManager();
        EntityTransaction t = em.getTransaction();

        User user;

        try {
            t.begin();
            user = em.find(User.class, id);
            t.commit();
        } catch (Exception e) {
            e.printStackTrace();
            user = null;
        } finally {
            if (t.isActive()) {
                t.rollback();
                em.close();
            }
        }
        return user;
    }

    @Override
    public List<User> findAll() {
        EntityManager em = getEntityManagerFactory().createEntityManager();
        EntityTransaction t = em.getTransaction();

        try {
            t.begin();
            String sql = "select e from User e";
            TypedQuery<User> query = em.createQuery(sql, User.class);
            t.commit();
            return query.getResultList();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        } finally {
            if (t.isActive()) {
                t.rollback();
                em.close();
            }
        }
    }


    public boolean checkDuplicateUsername(String username) {
        EntityManager em = getEntityManagerFactory().createEntityManager();
        EntityTransaction t = em.getTransaction();
        List<User> userList;

        try {
            t.begin();
            String sql = "select e from User e where e.username = :username";
            TypedQuery<User> query = em.createQuery(sql, User.class);
            query.setParameter("username", username);
            userList = query.getResultList();
            t.commit();

        } catch (Exception e) {
            e.printStackTrace();
            userList = null;

        } finally {
            if (t.isActive()) {
                t.rollback();
                em.close();
            }
        }
        return userList.size() > 0;
    }

    public boolean checkDuplicateEmail(String email) {
        EntityManager em = getEntityManagerFactory().createEntityManager();
        EntityTransaction t = em.getTransaction();
        List<User> userList;

        try {
            t.begin();
            String sql = "select e from User e where e.email = :email";
            TypedQuery<User> query = em.createQuery(sql, User.class);
            query.setParameter("email", email);
            userList = query.getResultList();
            t.commit();

        } catch (Exception e) {
            e.printStackTrace();
            userList = null;
        } finally {
            if (t.isActive()) {
                t.rollback();
                em.close();

            }
        }
        return userList != null && userList.size() > 0;
    }

    public User authentication(String username, String password) {
        EntityManager em = getEntityManagerFactory().createEntityManager();
        EntityTransaction t = em.getTransaction();
        User loggedUser;

        try {
            t.begin();
            String sql = "select e from User e where e.username = :username and e.password = :password";
            TypedQuery<User> query = em.createQuery(sql, User.class);
            query.setParameter("username", username);
            query.setParameter("password", password);
            loggedUser = query.getSingleResult();

        } catch (Exception e) {
            e.printStackTrace();
            loggedUser = null;

        } finally {
            if (t.isActive()) {
                t.rollback();
                em.close();
            }
        }
        return loggedUser;
    }
}
