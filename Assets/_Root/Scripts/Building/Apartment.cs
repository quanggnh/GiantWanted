using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Apartment : MonoBehaviour
{
    public Camera buildCam;
    //private void OnCollisionEnter(Collision collision)
    //{
    //    if (collision.gameObject.layer == 14)
    //    {
    //        this.gameObject.SetActive(false);
    //        this.transform.parent.GetChild(1).gameObject.SetActive(true);
    //        //SoundManager.Instance.PlayBrokenBuildingSound();
    //    }
    //    if (collision.gameObject.tag == "Enemy")
    //    {
    //        this.gameObject.SetActive(false);
    //        this.transform.parent.GetChild(1).gameObject.SetActive(true);
    //    }
    //}

    private void OnTriggerEnter(Collider other)
    {
        if (other.tag == "Enemy")
        {
            this.gameObject.SetActive(false);
            this.transform.parent.GetChild(1).gameObject.SetActive(true);
            GlobalInstance.Instance.gameManagerInstance.changeCamEndGameLose(buildCam);
          
        }
    }
    //private void OnCollisionEnter(Collision collision)
    //{
    //    Debug.Log(collision.gameObject.tag);

    //}
}
