using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
using UnityEngine.EventSystems;

public class BaseGun : MonoBehaviour
{
    [SerializeField] protected Vector3 loadBulletPos;
    [SerializeField] protected Vector3 loadBulletRot;
    [SerializeField] protected Transform fireFxTrans;

    public ParticleSystem fireFx;
    public BaseBullet bullet;
    public GameObject bulletObj;
    public bool IsEnemy = false;
    protected Rigidbody bulletRigid;
    protected RaycastHit hit;
    [SerializeField]
    protected Camera main;

    public void Preparing()
    {
        GlobalInstance.Instance.gameManagerInstance.IsShooting = false;
        GlobalInstance.Instance.gameManagerInstance.soundfx.playgunreload();
        this.gameObject.transform.DOLocalMove(loadBulletPos, 0.3f).OnComplete(() =>
        {
            this.gameObject.transform.DOLocalRotate(new Vector3(0f, 0f, 0f), 0.2f).OnComplete(() =>
            {
                this.gameObject.transform.DOLocalMove(new Vector3(1f, -2.5f, 1.4f), 0.3f).SetEase(Ease.OutExpo).OnComplete(() =>
                {
                    GlobalInstance.Instance.gameManagerInstance.player.IsInteractive = true;
                });
            });
        });
    }
    private void Update()
    {
        //GlobalInstance.Instance.gameManagerInstance.player.IsInteractive = true;
    }
    protected void LoadBullet()
    {
        var normalBullet = bullet.gameObject.GetComponent<NormalBullet>();
        //if(normalBullet != null)
        //{
        //    bullet.Damage = 10;
        //}
        bulletObj = Instantiate(bullet.gameObject, main.transform.position, main.transform.rotation);
        
    }
    public virtual void Fire()
    {
        LoadBullet();
        GlobalInstance.Instance.gameManagerInstance.soundfx.playgunshot();
    }

    public void ExploreFx()
    {
        fireFx.Play();
    }

    private void OnDisable()
    {
        this.gameObject.transform.DOKill();
    }
    
}
