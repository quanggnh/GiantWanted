using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class NormalBullet : BaseBullet
{
    [SerializeField] GameObject bulletList;
    private bool _isSLow = false;
    [SerializeField]
    private Camera cameraMain;


    // Update is called once per frame
    private void Start()
    {
        Init();
    }

    private void Init()
    {
        bulletList.SetActive(true);
    }

    private void OnCollisionEnter(Collision collision)
    {
        // PLAY BULLET SOUND
        if((collision.gameObject.layer == 14 && GlobalInstance.Instance.gameManagerInstance.SniperGun.GetComponent<BaseGun>().IsEnemy == true) || collision.gameObject.layer == 21)
        {
            if (collision.gameObject.layer == 14)
            {
                //play sound enemy got hit
            }
            else
            {
                //Something Got Broke Here
            }
            ContactPoint contact = collision.GetContact(0);
            Quaternion rot = Quaternion.FromToRotation(Vector3.up, contact.normal);
            Vector3 pos = contact.point;
            //BLOOD AND STUFF
            //var blood = SimplePool.Spawn(bloodFx, pos, rot);

            //// var explore = SimplePool.Spawn(exploreFx, pos, rot);
            //DOTween.Sequence().AppendInterval(1f).AppendCallback(() =>
            //{
            //    SimplePool.Despawn(blood.gameObject);
            //    //SimplePool.Despawn(explore.gameObject);
            //});
        }
        if (collision.gameObject.layer == 19)
        {
            ContactPoint contact = collision.GetContact(0);
            var build = collision.gameObject.transform.parent.GetComponent<BrokenBuilding>();
            build.CheckBrickListHit(collision.gameObject.transform.name, 20f);
            Quaternion rot = Quaternion.FromToRotation(Vector3.up, contact.normal);
            Vector3 pos = contact.point;
            var explore = Instantiate(exploreFx, pos, rot);
            DOTween.Sequence().AppendInterval(1f).AppendCallback(() =>
            {
                Destroy(explore);
            });
        }

        BulletRigid.velocity = Vector3.zero;
        Destroy(this.gameObject);
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.layer == 14 || other.gameObject.CompareTag("Enemy") || other.gameObject.CompareTag("FlyEnemy"))
        {
            //SoundManager.Instance.PlayEnemyCollsionSound(SoundManager.SoundEnenmyType.Injured);
            CheckSlowDieLastShot();
            //SimplePool.Despawn(this.gameObject);
            Destroy(this.gameObject);
        }

        if (other.gameObject.layer == 19)
        {
            var build = other.gameObject.transform.parent.GetComponent<BrokenBuilding>();
            build.CheckBrickListHit(other.gameObject.transform.name, 20f);
            //var explore = SimplePool.Spawn(exploreFx, other.gameObject.transform.position, other.gameObject.transform.rotation);
            //DOTween.Sequence().AppendInterval(1f).AppendCallback(() =>
            //{
            //    SimplePool.Despawn(explore.gameObject);
            //});
        }
    }
    public void CheckSlowDieLastShot()
    {
        //if (GameManager.Instance.CurrentLevelManager.EnemyAmount == 1)
        //{
        //    foreach (var enemy in GameManager.Instance.CurrentLevelManager.EnenmyInLevelList)
        //    {
        //        if (enemy.HeathPoint <= 0 && enemy.IsDieState == false)
        //        {
        //            GameManager.Instance.PlayerController.SniperGun.bulletObj.GetComponent<NormalBullet>().BulletCam.SetActive(false);
        //            GameManager.Instance.PlayerController.SniperGun.gameObject.SetActive(false);
        //            GameManager.Instance.MainCamera.SetupLastShopCam(GameManager.Instance.CurrentLevelManager.EnenmyInLevelList.IndexOf(enemy));
        //            enemy.CheckToDie();
        //        }
        //    }
        //}
    }
}
