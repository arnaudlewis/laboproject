package journey.dataAccess;

import common.dataAccess.Dao;
import journey.Journey;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.persistence.TypedQuery;
import java.util.List;

/**
 * Created by oliver on 09/03/14.
 */
public class DaoJourney extends Dao<Journey> {

    // SINGLETON PATTERN
    private static final DaoJourney instance = new DaoJourney();

    private DaoJourney() {
    }

    public static DaoJourney getInstance() {
        return instance;
    }

    // METHODE CRUD

    @Override
    public int insert(Journey obj) {

        EntityManager em = getEntityManagerFactory().createEntityManager();
        EntityTransaction t = em.getTransaction();

        int id = -1;

        try {
            t.begin();
            em.persist(obj);
            em.flush();
            id = obj.getId_journey();
            t.commit();
            return id;
        } catch (Exception e) {
            e.printStackTrace();
            id = -1;
        } finally {
            if (t.isActive()) {
                t.rollback();
                em.close();
            }
            return id;
        }

    }

    @Override
    public void update(Journey obj) {
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
    public void delete(Journey obj) {
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
    public Journey find(int id) {
        EntityManager em = getEntityManagerFactory().createEntityManager();
        EntityTransaction t = em.getTransaction();

        Journey journey;

        try {
            t.begin();
            journey = em.find(Journey.class, id);
            t.commit();
        } catch (Exception e) {
            e.printStackTrace();
            journey = null;
        } finally {
            if (t.isActive()) {
                t.rollback();
                em.close();
            }
        }
        return journey;
    }

    @Override
    public List<Journey> findAll() {
        List<Journey> l = null;
        return l;
    }

    public List<Journey> findAll(String depart, String arrivee) {
        EntityManager em = getEntityManagerFactory().createEntityManager();
        EntityTransaction t = em.getTransaction();

        try {
            t.begin();
            //String sql = "select e from Journey e where departure="+depart+" and arrival="+arrivee;
            String sql = "select e from Journey e";
            TypedQuery<Journey> query = em.createQuery(sql, Journey.class);
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


}
