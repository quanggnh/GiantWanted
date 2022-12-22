using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class Brick : MonoBehaviour
{
    public Rigidbody BrickRigid;

    private void Start()
    {
        BrickRigid = this.GetComponent<Rigidbody>();
    }
    private void OnCollisionEnter(Collision collision)
    {
        this.transform.root.GetChild(0).gameObject.SetActive(false);
        if (collision.gameObject.layer == 14)
        {
            this.BrickRigid.isKinematic = false;
            DOTween.Sequence().AppendInterval(0.7f).AppendCallback(() =>
            {
                var scaleRatio = Random.Range(0.01f, 0.08f);
                this.gameObject.transform.DOScale(new Vector3(scaleRatio, scaleRatio, scaleRatio), 1f).OnComplete(() =>
                {
                    this.gameObject.SetActive(false);
                });
            });
        }

        if (collision.gameObject.layer == 12)
        {
           this.gameObject.SetActive(false);
        }
    }
}
