using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
public class EnemyScript : MonoBehaviour
{
    public GameObject bloodfx;
    public Animator _anim;
    public Vector3 destination;
    public Tween run;
    public Rigidbody _rigid;
    private bool isDead = false;
    public Collider maincollider;
    private Vector3 bulelttrace;
    
    public float impact;
    private void Start()
    {
        setRagDoll();
        run = this.gameObject.transform.DOMove(destination, 35f);
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.tag == "Bullet")
        {
            bulelttrace = transform.position - other.transform.position;
            GlobalInstance.Instance.gameManagerInstance.soundfx.playgunhitted();
            var location = other.transform.position;
            run.Kill();
            //_rigid.AddForce(new Vector3(0, 200, 200), ForceMode.Impulse);
            Instantiate(bloodfx, location, Quaternion.identity);
            StartCoroutine(dieee());
        }
    }
    public void Die()
    {
        if (isDead)
        {
            return;
        }
        isDead = true;
        //GlobalInstance.Instance.gameManagerInstance.soundfx.playgunhitted();
        run.Kill();
        //_rigid.AddForce(new Vector3(0, 200, 200), ForceMode.Impulse);
        _rigid.velocity = Vector3.zero;
        StartCoroutine(dieee());
    }
    public List<Collider> RagDollParts = new List<Collider>();
    private void setRagDoll()
    {
        Collider[] colliders = this.gameObject.GetComponentsInChildren<Collider>();
        foreach (Collider c in colliders)
        {
            if (c.gameObject != this.gameObject)
            {
                c.isTrigger = true;
                RagDollParts.Add(c);
                c.attachedRigidbody.isKinematic = true;
            }
        }

    }
    private void enableRagDoll()
    {
        _rigid.useGravity = false;
        maincollider.enabled = false;
        this.gameObject.GetComponent<Collider>().enabled = false;
        _anim.enabled = false;
        foreach (Collider c in RagDollParts)
        {
            c.attachedRigidbody.isKinematic = false;
            c.isTrigger = false;
            c.attachedRigidbody.AddRelativeForce(bulelttrace * impact, ForceMode.Impulse);
        }
        for (int i = 0; i < RagDollParts.Count; i++)
        {
            RagDollParts[i].attachedRigidbody.isKinematic = false;
            RagDollParts[i].isTrigger = false;
            if(i == 0)
            {
                RagDollParts[i].attachedRigidbody.AddRelativeForce(bulelttrace * impact, ForceMode.Impulse);
            }
        }
    }

    IEnumerator dieee()
    {
        GlobalInstance.Instance.gameManagerInstance.numberofenemy = GlobalInstance.Instance.gameManagerInstance.numberofenemy + 1;
        GlobalInstance.Instance.gameManagerInstance.checkForVictory();

        yield return new WaitForSeconds(0.0f);
        //_anim.Play("Armature|push_fall");
        enableRagDoll();
    }
}
