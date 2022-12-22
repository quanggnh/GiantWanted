using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;


public class Scope : MonoBehaviour
{
    [SerializeField] List<Image> scopeImgList;
    // Start is called before the first frame update
    private void OnEnable()
    {
        for (int i = 0; i < scopeImgList.Count; i++)
        {
            if (i == scopeImgList.Count - 1)
            {
                scopeImgList[i].DOFade(1f, 0.2f).OnComplete(() => { GlobalInstance.Instance.gameManagerInstance.player.CanShoot = true; });
            }
            else
            {
               
                scopeImgList[i].DOFade(1f, 0.2f);
                scopeImgList[i].DOFade(1f, 0.2f);
            }
        }
    }
    private void OnDisable()
    {
        for (int i = 0; i < scopeImgList.Count; i++)
        {
            var tempColor = scopeImgList[i].color;
            tempColor.a = 0f;
            scopeImgList[i].color = tempColor;

            scopeImgList[i].DOKill();
        }
    }
}