package travel.dataAccess;

import common.dataAccess.Dao;
import travel.Travel;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import java.util.List;

/**
 * Created by eric on 26/02/14.
 */
public class DaoTravel extends Dao<Travel> {

    private static final DaoTravel instance = new DaoTravel();

    public static DaoTravel getInstance() {
        return instance;
    }

    private DaoTravel() {
    }

    @Override
    public int insert(Travel obj) {
        EntityManager em = getEntityManagerFactory().createEntityManager();
        EntityTransaction t = em.getTransaction();

        try {
            t.begin();
            em.persist(obj);
            int id = obj.getId_travel();
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
    public void update(Travel obj) {
        EntityManager em = getEntityManagerFactory().createEntityManager();
        EntityTransaction t = em.getTransaction();

        try {
            t.begin();
            em.persist(obj);
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
    public void delete(Travel obj) {
        EntityManager em = getEntityManagerFactory().createEntityManager();
        EntityTransaction t = em.getTransaction();

        try {
            t.begin();
            em.persist(obj);
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
    public Travel find(int id) {
        return null;
    }

    @Override
    public List<Travel> findAll() {
        return null;
    }
}
